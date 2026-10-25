// A tiny price calculator: just enough code for the factory to change in its tests.
export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function withTax(amount, rate) {
  return Math.round(amount * (1 + rate) * 100) / 100;
}

// Takes `percent` per cent off `amount`: discount(200, 10) is 180.
// `percent` is a whole per cent from 0 to 100 (10 means 10%, not 0.1); it is not clamped.
export function discount(amount, percent) {
  return amount * (1 - percent / 100);
}

// Formats an amount for a receipt: formatMoney(5) is "$5.00".
export function formatMoney(amount) {
  return `$${amount}`;
}

// A receipt whose subtotal is over BULK_THRESHOLD dollars gets BULK_PERCENT per cent off.
const BULK_THRESHOLD = 100;
const BULK_PERCENT = 5;

function roundToCents(amount) {
  return Math.round(amount * 100) / 100;
}

// The total a receipt shows: the subtotal in cents, less 5% (rounded to cents)
// when it is over $100, plus tax.
export function receiptTotal(items, taxRate) {
  const sub = roundToCents(subtotal(items));
  const discounted = sub > BULK_THRESHOLD ? roundToCents(discount(sub, BULK_PERCENT)) : sub;
  return withTax(discounted, taxRate);
}
