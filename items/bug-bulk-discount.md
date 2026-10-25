# Receipts over $100 do not get the bulk discount

`receiptTotal(items, taxRate)` in `src/prices.js` should take 5% off the subtotal when it is over $100, before tax, using `discount()`. It never applies the discount.

- **Expected:** items with a subtotal of $200 and a tax rate of 0.1 total `209` (200 less 5% is 190, plus 10% tax).
- **Actual:** the total is `220`.

A subtotal of exactly $100 gets no discount. Done when `receiptTotal` applies it and tests cover $200 and $100.
