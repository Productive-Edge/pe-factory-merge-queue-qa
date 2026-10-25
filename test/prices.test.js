import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, withTax, discount, formatMoney } from "../src/prices.js";

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

test("formatMoney always shows two decimal places", () => {
  assert.equal(formatMoney(5), "$5.00");
  assert.equal(formatMoney(3.5), "$3.50");
});
