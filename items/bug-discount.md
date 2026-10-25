# discount() subtracts the percentage as dollars

`discount(amount, percent)` in `src/prices.js` should take `percent` per cent off `amount`. It subtracts `percent` as a dollar amount instead.

- **Expected:** `discount(200, 10)` is `180`, and `discount(50, 20)` is `40`.
- **Actual:** `discount(200, 10)` is `190`, and `discount(50, 20)` is `30`.

Done when `discount` takes the percentage off and a test covers both examples.

<!-- pe:build-record v1 -->
## Built

- Run: 01a174c9-1c35-7fbc-a920-2770d14b4ec5, on branch `fix/bug-discount-35c75f`
- Design decisions made during the build:
  none recorded
<!-- /pe:build-record v1 -->
