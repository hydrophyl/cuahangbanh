import React, { useEffect, useState } from "react";
import { getOrders } from "../actions/order";
import useOrder from "../components/useOrder.jsx";

const ReceiptPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getOrders();
      setOrders(res);
    };
    fetchOrders();
  });
  const { getName, getRoom, currentOrderedItems } = useOrder();
  return (
    <div>
      <h3>
        {getName}, {getRoom}
      </h3>
      {currentOrderedItems.map((orderedItem, index) => (
        <p key={index}>
          {orderedItem.quantity} times {orderedItem.size} with topping{" "}
          {orderedItem.topping}
        </p>
      ))}
      <button onClick={() => console.log(orders)}>fetchOrders</button>
    </div>
  );
};

export default ReceiptPage;
