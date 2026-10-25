import { test } from "node:test";
import assert from "node:assert/strict";
import { formatMoney } from "../src/prices.js";

// The till that reads printed receipts parses amounts as plain digits with no grouping.
test("receipt amounts print as plain digits for the till", () => {
  assert.equal(formatMoney(1234.5), "$1234.50");
});
