// Constants as single source of truth
const SHIPPING_THRESHOLD_EUR = 100; // euros
const SHIPPING_FLAT_EUR = 7.99; // euros
const ONE_HUNDRED = 100; // percent base
const GIFT_WRAP_PRICE_EUR = 1.5; // euros per item
const FIVE_PERCENT = 0.05; // percent
const TEN_PERCENT = 0.1; // percent

function calculateCartTotal(cartItems: CartItemType[], vat: number) {
  let totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty + giftWrapCost(curr), 0);

  let discountPercentage = calculateDiscountPercentage(totalPrice);

  totalPrice = applyDiscount(totalPrice, discountPercentage);
  totalPrice = applyTax(totalPrice, vat);

  totalPrice = tieredDiscount(totalPrice);
  return totalPrice;
}

function calculateCartTotalSafe(cartItems: CartItemType[], vat: number) {
  assertCartInput(cartItems, vat);
  return calculateCartTotal(cartItems, vat);
}

// Pure helpers — no side effects
function applyTax(amount: number, taxRatePercent: number) {
  if (taxRatePercent <= 0) return amount;
  return amount + amount * (taxRatePercent / ONE_HUNDRED);
}

function calculateDiscountPercentage(total: number) {
  if (total >= 50 && total <= 100) {
    return FIVE_PERCENT;
  } else if (total > 100) {
    return TEN_PERCENT;
  }
  return 0;
}

function applyDiscount(amount: number, discountPercent: number) {
  if (discountPercent <= 0) return amount;
  return amount - amount * discountPercent;
}

function giftWrapCost(item: CartItemType) {
  if (!item.giftWrap) return 0;
  return GIFT_WRAP_PRICE_EUR * item.qty;
}

function tieredDiscount(total: number) {
  if (total > 100) {
    return total + 0;
  } else {
    return total + shippingCost(total);
  }
}

function assertCartInput(cartItems: CartItemType[], taxRatePercent: number) {
  if (!Array.isArray(cartItems)) throw new Error("Cart items must be an array");
  if (taxRatePercent < 0) throw new Error("Tax rate must be a positive number");
}

function shippingCost(orderTotal: number) {
  // No duplication, single rule
  return orderTotal > SHIPPING_THRESHOLD_EUR ? 0 : SHIPPING_FLAT_EUR;
}

type CartItemType = { name: string; price: number; qty: number; giftWrap: boolean };

const cart49: CartItemType[] = [
  { name: "Stylo", price: 3, qty: 5, giftWrap: true },
  { name: "Cahier", price: 8, qty: 3, giftWrap: false },
  { name: "Règle", price: 2, qty: 5, giftWrap: false },
];

const cart75: CartItemType[] = [
  { name: "Livre", price: 15, qty: 3, giftWrap: false },
  { name: "Marqueur", price: 5, qty: 6, giftWrap: false },
];

const cart150: CartItemType[] = [
  { name: "Ordinateur portable", price: 50, qty: 2, giftWrap: false },
  { name: "Souris", price: 25, qty: 2, giftWrap: false },
];

console.log("Panier 49€:", calculateCartTotalSafe(cart49, 20));
console.log("Panier 75€:", calculateCartTotalSafe(cart75, 20));
console.log("Panier 150€:", calculateCartTotalSafe(cart150, 20));
