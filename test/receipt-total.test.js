import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, receiptTotal } from "../src/prices.js";

test("receiptTotal gives no discount when float error lifts a $100.00 subtotal a hair over 100", () => {
  const items = [{ price: 99.4, quantity: 1 }, { price: 0.2, quantity: 1 }, { price: 0.4, quantity: 1 }];
  // 99.4 + 0.2 + 0.4 sums to 100.00000000000001 in floating point, but is $100.00 in cents.
  assert.ok(subtotal(items) > 100);
  // No discount: 100.00 * 1.1 = 110.
  assert.equal(receiptTotal(items, 0.1), 110);
});

test("receiptTotal rounds the discount to whole cents before tax", () => {
  // 5% of 100.08 is 5.004, so the discounted amount 95.076 rounds to 95.08.
  // Tax: 95.08 * 1.1 = 104.588, which rounds to 104.59.
  // (Taxing the unrounded 95.076 would give 104.5836, i.e. 104.58.)
  assert.equal(receiptTotal([{ price: 100.08, quantity: 1 }], 0.1), 104.59);
});

test("receiptTotal discounts a multi-quantity cart over $100", () => {
  // Subtotal 60 * 2 = 120; less 5% (6) is 114; plus 10% tax is 125.4.
  assert.equal(receiptTotal([{ price: 60, quantity: 2 }], 0.1), 125.4);
});

test("receiptTotal of an empty cart is 0", () => {
  assert.equal(receiptTotal([], 0.1), 0);
});
