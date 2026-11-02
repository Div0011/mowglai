import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  assertSameTenant,
  createDomainEvent,
  TenantBoundaryError,
} from "./index.ts";

describe("shared tenant and event contracts", () => {
  test("allows access when tenant identifiers match", () => {
    assert.doesNotThrow(() => assertSameTenant("tenant-a", "tenant-a"));
  });

  test("rejects cross-tenant access", () => {
    assert.throws(() => assertSameTenant("tenant-a", "tenant-b"), TenantBoundaryError);
  });

  test("fails closed when a tenant identifier is missing", () => {
    assert.throws(() => assertSameTenant("tenant-a", ""), TenantBoundaryError);
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
    assert.equal(event.version, 1);
    assert.equal(event.tenantId, "tenant-a");
    assert.deepEqual(event.payload, { orderId: "order-1" });
  });

  test("rejects incomplete events", () => {
    assert.throws(
      () =>
        createDomainEvent({
          id: "",
          type: "shop.order.created",
          tenantId: "tenant-a",
          actorId: "user-1",
          correlationId: "req-1",
          occurredAt: "2026-10-14T00:00:00.000Z",
          payload: {},
        }),
      /Domain event requires a non-empty id/,
    );
  });

  test("rejects invalid event timestamps", () => {
    assert.throws(
      () =>
        createDomainEvent({
          id: "evt-1",
          type: "shop.order.created",
          tenantId: "tenant-a",
          actorId: "user-1",
          correlationId: "req-1",
          occurredAt: "not-a-date",
          payload: {},
        }),
      /occurredAt must be a valid/,
    );
  });
});
