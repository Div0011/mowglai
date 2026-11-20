/**
 * Shared contracts for the Mowglai product ecosystem.
 *
 * Security note: these helpers are application-level guardrails, not a substitute
 * for database RLS, server-side authorization, or provider-side access controls.
 */

export type Identifier = string;

export interface TenantContext {
  tenantId: Identifier;
  actorId: Identifier;
  roles: readonly string[];
  requestId: Identifier;
}

export interface AuditMetadata {
  actorId: Identifier;
  tenantId: Identifier;
  requestId: Identifier;
  occurredAt: string;
  source: string;
}

export interface DomainEvent<TType extends string = string, TPayload = unknown> {
  id: Identifier;
  type: TType;
  version: 1;
  tenantId: Identifier;
  occurredAt: string;
  actorId: Identifier;
  correlationId: Identifier;
  payload: TPayload;
}

export type Result<T, E extends Error = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export class TenantBoundaryError extends Error {
  readonly code = "TENANT_BOUNDARY_VIOLATION";

  constructor() {
    super("Tenant boundary violation");
    this.name = "TenantBoundaryError";
  }
}

/**
 * Fail closed when an operation attempts to access a resource from another tenant.
 * Call this on the server before accessing the resource; also enforce tenant isolation
 * in the database (for example with RLS).
 */
export function assertSameTenant(
  contextTenantId: string,
  resourceTenantId: string,
): void {
  if (!contextTenantId || !resourceTenantId || contextTenantId !== resourceTenantId) {
    throw new TenantBoundaryError();
  }
}

export interface CreateDomainEventInput<TType extends string, TPayload> {
  id: string;
  type: TType;
  tenantId: string;
  actorId: string;
  correlationId: string;
  occurredAt: string;
  payload: TPayload;
}

/** Create a versioned event with required tenant and audit correlation fields. */
export function createDomainEvent<TType extends string, TPayload>(
  input: CreateDomainEventInput<TType, TPayload>,
): DomainEvent<TType, TPayload> {
  const required: Array<[string, string]> = [
    ["id", input.id],
    ["type", input.type],
    ["tenantId", input.tenantId],
    ["actorId", input.actorId],
    ["correlationId", input.correlationId],
    ["occurredAt", input.occurredAt],
  ];

  for (const [field, value] of required) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError(`Domain event requires a non-empty ${field}`);
    }
  }

  if (Number.isNaN(Date.parse(input.occurredAt))) {
    throw new TypeError("Domain event occurredAt must be a valid ISO-compatible date");
  }

  return { ...input, version: 1 };
}
