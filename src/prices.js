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

// Formats an amount for a receipt with two decimal places, grouping the dollars in
// threes with commas: formatMoney(5) is "$5.00", formatMoney(-1234.5) is "-$1,234.50".
// Rounds to the cent like withTax. Throws a TypeError for an amount that is not a
// finite number, and a RangeError when its cents exceed Number.MAX_SAFE_INTEGER.
export function formatMoney(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount)) {
    throw new TypeError(`formatMoney: amount must be a finite number, got ${String(amount)}`);
  }
  const cents = Math.round(Math.abs(amount) * 100);
  if (cents > Number.MAX_SAFE_INTEGER) {
    throw new RangeError(`formatMoney: amount is too large to format exactly, got ${String(amount)}`);
  }
  const sign = amount < 0 && cents !== 0 ? "-" : "";
  const dollars = String(Math.floor(cents / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const rest = String(cents % 100).padStart(2, "0");
  return `${sign}$${dollars}.${rest}`;
}

// The total a receipt shows: the subtotal, less 5% when it is over $100, plus tax.
export function receiptTotal(items, taxRate) {
  const sub = subtotal(items);
  return withTax(sub, taxRate);
}
