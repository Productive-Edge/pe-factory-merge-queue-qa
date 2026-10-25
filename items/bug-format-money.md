# formatMoney() drops the cents

`formatMoney(amount)` in `src/prices.js` should always show two decimal places.

- **Expected:** `formatMoney(5)` is `"$5.00"`, and `formatMoney(3.5)` is `"$3.50"`.
- **Actual:** `"$5"` and `"$3.5"`.

Done when `formatMoney` always shows cents and a test covers both examples.

<!-- pe:build-record v1 -->
## Built

- Run: 01a174c9-1c35-75ce-bc03-352b3d1ac77c, on branch `fix/bug-format-money-35c75f`
- Design decisions made during the build:
  none recorded
<!-- /pe:build-record v1 -->
