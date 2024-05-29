import React, { createContext, useState } from "react";
import { DATA } from "../data";

export const Context = createContext();
export const initMoney = 100000000000;

export const Provider = (props) => {
  const [money, setMoney] = useState(initMoney);
  const [data, setData] = useState(DATA);
  const [items, setItems] = useState(DATA);

  return (
    <Context.Provider
      value={{ money, setMoney, data, setData, items, setItems }}
    >
      {props.children}
    </Context.Provider>
  );
};
