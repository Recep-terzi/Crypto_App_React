import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Main.css'
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const Main = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="back">
      <div className="container" style={{ backgroundColor: "#205252" }}>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Coin</th>
              <th scope="col">Coin İmage</th>
              <th scope="col">Max TL</th>
              <th scope="col">Min TL</th>
              <th scope="col">Anlık TL</th>
            </tr>
          </thead>
          <tbody>
            {coin.map((datas) => (
              <tr key={datas.id} class="rounded">
                <td>
                  <img src={datas.image} style={{ width: "50px",backgroundColor:"transparent" }} alt="" />
                </td>
                <th scope="row">
                  {datas.name} ({datas.symbol})
                </th>

                <td>{datas.high_24h} TL</td>
                <td>{datas.low_24h} TL</td>
                <td style={{ fontWeight: "bold" }}>
                  {datas.current_price} TL{" "}
                </td>
                <td>
                  <Link to={`/detail/${datas.id}`} class="btn btn-secondary">
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
