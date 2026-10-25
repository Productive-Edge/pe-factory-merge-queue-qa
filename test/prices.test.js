import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, withTax, discount, receiptTotal } from "../src/prices.js";

test("subtotal adds price times quantity", () => {
  assert.equal(subtotal([{ price: 2, quantity: 3 }, { price: 1.5, quantity: 2 }]), 9);
});

test("withTax rounds to cents", () => {
  assert.equal(withTax(10, 0.0825), 10.83);
});

test("discount takes percent per cent off the amount", () => {
  assert.equal(discount(200, 10), 180);
  assert.equal(discount(50, 20), 40);
});

test("receiptTotal takes 5% off a subtotal over $100 before tax", () => {
  assert.equal(receiptTotal([{ price: 200, quantity: 1 }], 0.1), 209);
});

test("receiptTotal gives no discount on a subtotal of exactly $100", () => {
  assert.equal(receiptTotal([{ price: 100, quantity: 1 }], 0.1), 110);
});
