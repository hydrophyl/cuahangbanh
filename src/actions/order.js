import axios from "axios";
import { SERVER_BACKEND } from "./config";

export const getOrders = () => {
  try {
    return axios.get(`${SERVER_BACKEND}/orders`);
  } catch (error) {
    console.log(error);
  }
};

export const addNewOrder = (name, room, email, orderedItems) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(orderedItems);
  const body = JSON.stringify({
    name,
    room,
    email,
    orderedItems
  });
  console.log(body);
  return axios.post(`${SERVER_BACKEND}/order`, body, config);
};
