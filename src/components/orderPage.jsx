import React, { useEffect, useState } from "react";
import useOrder from "./useOrder.jsx";

const OrderPage = () => {
  const { importShoppingCart, pushOrder } = useOrder();
  const [product, setProduct] = useState({
    size: "",
    topping: "",
    quantity: 1
  });
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isSizeChosed, setIsSizeChosed] = useState(false);

  const addToCart = (prop) => {
    setShoppingCart((shoppingCart) => [...shoppingCart, prop]);
    setProduct({ ...product, size: "", topping: "" });
  };

  const setItem = (e) => {
    if (product.size === "") {
      setProduct({ ...product, size: e.target.value });
      setIsSizeChosed(true);
    }
    if (product.size !== "" && product.topping === "") {
      setProduct({ ...product, topping: e.target.value });
      setIsSizeChosed(false);
    } else {
      return 0;
    }
  };

  const incQuantity = () => {
    setProduct({ ...product, quantity: (product.quantity += 1) });
  };

  useEffect(() => {
    const updateOrderedItems = async () => {
      importShoppingCart(shoppingCart);
    };
    updateOrderedItems();
    console.log("re-render?");
  }, [shoppingCart]);

  return (
    <div>
      <button
        value={!isSizeChosed ? "small" : "puderzucker"}
        onClick={(e) => {
          setItem(e);
        }}
      >
        {!isSizeChosed ? "small" : "puderzucker"}
      </button>
      <button
        value={!isSizeChosed ? "big" : "nutella"}
        onClick={(e) => {
          setItem(e);
        }}
      >
        {!isSizeChosed ? "big" : "nutella"}
      </button>
      <button onClick={() => incQuantity()}>{product.quantity}</button>
      <button onClick={() => addToCart(product)}>add to Cart</button>

      <h3>Your sweetness orders</h3>
      {shoppingCart.map((cartItem, index) => (
        <p key={index}>
          {cartItem.quantity} times of {cartItem.size} with topping{" "}
          {cartItem.topping}
        </p>
      ))}
      <button onClick={() => importShoppingCart(shoppingCart)}>
        Click when youre ready!
      </button>
      <button onClick={() => pushOrder()}>pushOrder</button>
    </div>
  );
};
export default OrderPage;
