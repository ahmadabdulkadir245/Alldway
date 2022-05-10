import { CurrencyDollar } from "heroicons-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import CheckOutProduct from "../components/CheckOutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
// import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
function Checkout() {
  // const stripePromise = loadStripe(process.env.stripe_public_key);
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  const createCheckoutSesison = async () => {
    // const stripe = await stripePromise;
    // Call the backend to create a checkout session....
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: session.user.email,
    });

    // redirect user/cusomer to stripe checkout

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);

    return;
  };

  return (
    <div>
      <Header />
      {/* header */}
      <div className='lg:flex max-w-screen-3xl mx-auto'>
        {/* left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='/slider-2.jpg'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col pt-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Slopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                img={item.img}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
          {/* Right add/ remove button */}
        </div>
        {/* right */}
        <div className='flex flex-col  bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items):{" "}
                <span className='font-bold'>
                  {/* <CurrencyDollar setQuantity={ total}/> */}
                </span>{" "}
              </h2>

              <button
                role='link'
                onClick={createCheckoutSesison}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 border-gray-200 text-gray-300 cursor-not-allowed "
                }`}
              >
                {!session ? "Sign in to checkout" : " Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
