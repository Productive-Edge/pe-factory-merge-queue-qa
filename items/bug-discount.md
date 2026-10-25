# discount() subtracts the percentage as dollars

`discount(amount, percent)` in `src/prices.js` should take `percent` per cent off `amount`. It subtracts `percent` as a dollar amount instead.

- **Expected:** `discount(200, 10)` is `180`, and `discount(50, 20)` is `40`.
- **Actual:** `discount(200, 10)` is `190`, and `discount(50, 20)` is `30`.

Done when `discount` takes the percentage off and a test covers both examples.
