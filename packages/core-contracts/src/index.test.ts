import { describe, expect, test } from "bun:test";
import {
  assertSameTenant,
  createDomainEvent,
  TenantBoundaryError,
} from "./index";

describe("shared tenant and event contracts", () => {
  test("allows access when tenant identifiers match", () => {
    expect(() => assertSameTenant("tenant-a", "tenant-a")).not.toThrow();
  });

  test("rejects cross-tenant access", () => {
    expect(() => assertSameTenant("tenant-a", "tenant-b")).toThrow(TenantBoundaryError);
  });

  test("fails closed when a tenant identifier is missing", () => {
    expect(() => assertSameTenant("tenant-a", "")).toThrow(TenantBoundaryError);
  });

  test("creates a versioned domain event with tenant and correlation context", () => {
    const event = createDomainEvent({
      id: "evt-1",
      type: "shop.order.created",
      tenantId: "tenant-a",
      actorId: "user-1",
      correlationId: "req-1",
      occurredAt: "2026-10-14T00:00:00.000Z",
      payload: { orderId: "order-1" },
    });
    expect(event.version).toBe(1);
    expect(event.tenantId).toBe("tenant-a");
    expect(event.payload).toEqual({ orderId: "order-1" });
  });

  test("rejects incomplete events", () => {
    expect(() => createDomainEvent({
      id: "",
      type: "shop.order.created",
      tenantId: "tenant-a",
      actorId: "user-1",
      correlationId: "req-1",
      occurredAt: "2026-10-14T00:00:00.000Z",
      payload: {},
    })).toThrow("Domain event requires a non-empty id");
  });

  test("rejects invalid event timestamps", () => {
    expect(() => createDomainEvent({
      id: "evt-1",
      type: "shop.order.created",
      tenantId: "tenant-a",
      actorId: "user-1",
      correlationId: "req-1",
      occurredAt: "not-a-date",
      payload: {},
    })).toThrow("occurredAt must be a valid");
  });
});
