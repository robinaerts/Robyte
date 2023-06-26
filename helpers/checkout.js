import { loadStripe } from "@stripe/stripe-js";

export const checkout = async (product) => {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: [{ price: product.priceId, quantity: 1 }],
    successUrl: `${window.location.origin}/store?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/store`,
  });
};
