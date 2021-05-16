import React from "react";
import "../assets/styles/cointable.css";
import btc from "../assets/images/bitcoin.png";
import eth from "../assets/images/etherum.png";
import lite from "../assets/images/litecoin.png";
import cash from "../assets/images/bitcoin-cash.png";
import chart from "../assets/images/chart.png";
const CoinTable = () => {
  const items = [
    {
      icon: btc,
      name: "Bitcoin",
      code: "BTC",
      price: "GHS 314,259.22",
      change: +41.86,
      chart: chart,
    },
    {
      icon: eth,
      name: "Ethereum",
      code: "ETH",
      price: "GHS 314,654.22",
      change: +89.75,
      chart: chart,
    },
    {
      icon: lite,
      name: "Litecoin",
      code: "LTC",
      price: "GHS 894,479.22",
      change: +59.23,
      chart: chart,
    },
    {
      icon: cash,
      name: "Bitcoin Cash",
      code: "BCH",
      price: "GHS 6534,259.22",
      change: +44.15,
      chart: chart,
    },
  ];

  return (
    <div className="table__component">
      <div className="table__wrapper">
        <table>
          <thead>
            <tr>
              <td className="table-index">#</td>
              <td>Name</td>
              <td>Price</td>
              <td>Change</td>
              <td>Chart</td>
              <td>Trade</td>
            </tr>
          </thead>

          <tbody>
            {items.map((item, i) => {
              return (
                <tr>
                  <td className="table-index">{i + 1}</td>
                  <td className="name_col">
                    <img src={item.icon} alt="logo" />
                    <h3 className="name">{item.name}</h3>
                    <h3 className="code">{item.code}</h3>
                  </td>
                  <td>
                    <p className="price">{item.price}</p>
                  </td>
                  <td>
                    <p className="change">{item.change}</p>
                  </td>
                  <td>
                    <img src={item.chart} alt="item logo" />
                  </td>
                  <td>
                    <button className="table-btn">Buy</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
