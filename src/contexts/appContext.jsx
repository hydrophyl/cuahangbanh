import React, { useState } from "react";

const Order = React.createContext([{}, () => {}]);

const OrderProvider = (props) => {
  const [state, setState] = useState({
    orderedItems: [],
    name: "",
    room: "",
    email: ""
  });
  return (
    <Order.Provider value={[state, setState]}>{props.children}</Order.Provider>
  );
};

export { Order, OrderProvider };
