import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, withTax } from "../src/prices.js";

test("subtotal adds price times quantity", () => {
  assert.equal(subtotal([{ price: 2, quantity: 3 }, { price: 1.5, quantity: 2 }]), 9);
});

test("withTax rounds to cents", () => {
  assert.equal(withTax(10, 0.0825), 10.83);
});
