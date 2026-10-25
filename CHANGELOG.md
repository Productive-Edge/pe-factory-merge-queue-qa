# Changelog

Every change to `src/` adds a line under **Unreleased**. The merge queue checks this.

## Unreleased

- Started the changelog.
- Fixed `discount(amount, percent)`: it now takes `percent` per cent off `amount` (`discount(200, 10)` is `180`) instead of subtracting `percent` as a dollar amount.
- formatMoney always shows two decimal places ("$5.00", "$3.50"), writes negative amounts as "-$5.00", and throws for an amount that is not a finite number.
