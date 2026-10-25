# formatMoney() has no thousands separators

Receipts for large orders are hard to read: `formatMoney(amount)` in `src/prices.js` prints every digit with no grouping.

- **Expected:** `formatMoney(1234.5)` is `"$1,234.50"`, `formatMoney(1234567)` is `"$1,234,567.00"` and `formatMoney(-1234.5)` is `"-$1,234.50"`.
- **Actual:** `"$1234.50"`, `"$1234567.00"` and `"-$1234.50"`.

Amounts under 1,000 are unchanged (`formatMoney(5)` is still `"$5.00"`). Done when `formatMoney` groups thousands with commas and a test covers the three examples.

<!-- pe:build-record v1 -->
## Built

- Run: 01a174ed-5976-7257-98b5-3a9e66581bdb, on branch `feat/bug-thousands`
- Design decisions made during the build:
  none recorded
<!-- /pe:build-record v1 -->
