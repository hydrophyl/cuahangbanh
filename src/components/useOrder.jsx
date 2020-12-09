import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { addNewOrder } from "../actions/order";
import { Order } from "../contexts/appContext.jsx";

const useOrder = () => {
  const history = useHistory();
  const [state, setState] = useContext(Order);
  const currentOrderedItems = state.orderedItems;
  const getOrder = state;
  const getName = state.name;
  const getRoom = state.room;
  const getEmail = state.email;
  const importShoppingCart = async (prop) => {
    await setState((state) => ({ ...state, orderedItems: prop }));
  };
  const pushOrder = async () => {
    try {
      await addNewOrder(
        state.name,
        state.room,
        state.email,
        currentOrderedItems
      );
    } catch (error) {
      console.log(error);
    }
    history.push("/receipt");
  };
  const addInfos = (props) => {
    setState((state) => ({
      ...state,
      name: props.name,
      email: props.email,
      room: props.room
    }));
  };

  return {
    currentOrderedItems,
    importShoppingCart,
    getOrder,
    addInfos,
    getName,
    getRoom,
    getEmail,
    pushOrder
  };
};

export default useOrder;
