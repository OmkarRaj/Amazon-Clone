import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div className="checkout__basketInfo">
            <h2>Your Basket Is Empty!!!</h2>
            <h5>
              You can add items to basket by clicking the 'Add to Basket' button
              below the products.
            </h5>
          </div>
        ) : (
          <div className="checkout__product">
            <h2 className="checkout__basketInfo">Your Shopping Basket</h2>

            {/* List out all of the checkout product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        ;
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
      ;
    </div>
  );
}

export default Checkout;
