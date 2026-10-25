// A tiny price calculator: just enough code for the factory to change in its tests.
export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function withTax(amount, rate) {
  return Math.round(amount * (1 + rate) * 100) / 100;
}

// Prices are shown in whole dollars on receipts.
export const RECEIPT_ROUNDING = 1;
