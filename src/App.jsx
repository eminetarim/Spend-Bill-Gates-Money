import React, { useState, useContext } from "react";
import "./App.css";
import Card from "./components/card";
import Container from "./layouts/container";
import Image from "./components/image";
import billGates from "./assets/billGates.jpeg";
import Cards from "./layouts/cards/Cards";
import { formatNumber } from "./helpers/formatNumber";
import Button from "./components/button";
import Receipt from "./layouts/receipt";
import { Context } from "./context/AppContext";

const App = () => {
  const { items, setItems, money, setMoney } = useContext(Context);
  const [count, setCount] = useState(0);

  const buyItem = (item, quantity) => {
    const totalCost = item.item_cost * quantity;
    if (money >= totalCost) {
      setCount(count + quantity);
      setMoney((prevMoney) => prevMoney - totalCost);
      setItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
        if (existingItemIndex !== -1) {
          const newItems = [...prevItems];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity + quantity,
          };
          return newItems;
        } else {
          return [...prevItems, { ...item, quantity }];
        }
      });
    }
  };

  const removeItem = (item, quantity) => {
    const totalCost = item.item_cost * quantity;
    if (count >= quantity) {
      setCount((prevCount) => prevCount - quantity);
      setMoney((prevMoney) => prevMoney + totalCost);
      setItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
        if (existingItemIndex !== -1) {
          const newItems = [...prevItems];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity - quantity,
          };
          return newItems;
        } else {
          return [...prevItems, { ...item, quantity: 0 }];
        }
      });
    }
  };

  return (
    <div className="app">
      <Container>
        <Card>
          <div className="imageWrapper">
            <Image src={billGates} isRounded={true} />
          </div>
          <h1>Spend Bill Gates' Money</h1>
        </Card>
        <Card bgColor={"linear-gradient(180deg, #2ecc71, #1abc9c)"}>
          <h2 style={{ color: "#FFFFFF" }}>${money.toLocaleString()}</h2>
        </Card>
        <Cards>
          {items.map((item) => (
            <Card width={"32%"} key={item.id}>
              <div style={{ height: "120px", marginBottom: "16px" }}>
                <Image src={item.img_src} />
              </div>
              <h3>{item.item_name}</h3>
              <h4 style={{ color: "#24c486" }}>
                ${formatNumber(item.item_cost)}
              </h4>
              <div className="buttonWrapper">
                <Button
                  handleClick={() =>
                    item.quantity === 0 ? null : removeItem(item, 1)
                  }
                  bgColor={`${
                    item.quantity !== 0
                      ? "linear-gradient(180deg, #f53b82, #f53b57)"
                      : "#f1f2f6"
                  }`}
                >
                  Sell
                </Button>
                <div className="quantity">
                  <p>{item.quantity}</p>
                </div>
                <Button
                  handleClick={() => buyItem(item, 1)}
                  bgColor={`${
                    money >= item.item_cost
                      ? "linear-gradient(180deg, #2ecc71, #1abc9c)"
                      : "#f1f2f6"
                  }`}
                >
                  Buy
                </Button>
              </div>
            </Card>
          ))}
        </Cards>
        <Receipt />
      </Container>
    </div>
  );
};

export default App;
