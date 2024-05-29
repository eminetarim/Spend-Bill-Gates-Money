import React, { useContext } from "react";
import Card from "../../components/card";
import "./styles.css";
import { Context, initMoney } from "../../context/AppContext";
import { formatNumber } from "../../helpers/formatNumber";

const Receipt = () => {
  const { items, money } = useContext(Context);
  return (
    <Card>
      <h2>Your Receipt</h2>
      <div className="cart">
        {items
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div className="product" key={`receipt-${item.item_name}`}>
              <p>{item.item_name}</p>
              <p>x{item.quantity}</p>
              <p style={{ color: "#24c486" }}>${ formatNumber(item.item_cost)}</p>
            </div>
          ))}
      </div>
      <div className="total">
        <h4>Total</h4>

        <p style={{ color: "#24c486" }}>${formatNumber(initMoney - money)}</p>
      </div>
    </Card>
  );
};

export default Receipt;
