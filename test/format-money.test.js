// AI-GEN: model=claude-opus-5-5 date=2026-10-25 spec=items/bug-format-money.md@v1 reviewer=pending gate=pending
import { test } from "node:test";
import assert from "node:assert/strict";
import { withTax, formatMoney } from "../src/prices.js";

test("formatMoney shows two decimal places", () => {
  assert.equal(formatMoney(0), "$0.00");
  assert.equal(formatMoney(10.25), "$10.25");
});

test("formatMoney rounds to the nearest cent", () => {
  assert.equal(formatMoney(2.346), "$2.35");
  assert.equal(formatMoney(2.344), "$2.34");
});

test("formatMoney puts the sign before the dollar sign", () => {
  assert.equal(formatMoney(-5), "-$5.00");
});

test("formatMoney never shows a negative zero", () => {
  assert.equal(formatMoney(-0.001), "$0.00");
});

test("formatMoney agrees with withTax rounding", () => {
  assert.equal(formatMoney(withTax(10, 0.0825)), "$10.83");
});

test("formatMoney throws a TypeError for an amount that is not a finite number", () => {
  for (const bad of [NaN, Infinity, -Infinity, "5", null, undefined]) {
    assert.throws(() => formatMoney(bad), TypeError, `expected TypeError for ${String(bad)}`);
  }
});

test("formatMoney throws a RangeError when the cents cannot be exact", () => {
  assert.throws(() => formatMoney(1e21), RangeError);
});
