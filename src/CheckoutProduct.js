import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {

    const [{basket} , dispatch ] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        });
    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image}></img>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
