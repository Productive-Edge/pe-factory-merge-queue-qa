# formatMoney() drops the cents

`formatMoney(amount)` in `src/prices.js` should always show two decimal places.

- **Expected:** `formatMoney(5)` is `"$5.00"`, and `formatMoney(3.5)` is `"$3.50"`.
- **Actual:** `"$5"` and `"$3.5"`.

Done when `formatMoney` always shows cents and a test covers both examples.
