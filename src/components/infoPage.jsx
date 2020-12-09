import React from "react";
import { useHistory } from "react-router-dom";
import useOrder from "./useOrder";
import { useForm } from "react-hook-form";

const InfoPage = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const { addInfos } = useOrder();
  const onSubmit = (data) => {
    const name = data.name;
    const room = data.room;
    const email = data.email;
    addInfos({ name, room, email });
    history.push("/order");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          style={{ borderColor: errors.name && "#a83632" }}
          ref={register({ required: true })}
        />
        <br />
        <label htmlFor="room">room</label>
        <input
          type="text"
          name="room"
          style={{ borderColor: errors.room && "#a83632" }}
          ref={register({ required: true })}
        />
        <br />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          style={{ borderColor: errors.email && "#a83632" }}
          ref={register({ required: true })}
        />
        <br />
        <button type="submit">Go To Order</button>
      </form>
    </div>
  );
};

export default InfoPage;
