import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const url = "https://api.coingecko.com/api/v3/coins/";
const Detail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [coin1, setCoin1] = useState([]);
  const [coin2, setCoin2] = useState([]);

  useEffect(() => {
    fetch(`${url}${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        setCoin1(data.image);
        setCoin2(data.market_data.current_price);
        console.log(data);
      });
  }, [id]);
  const { symbol, name } = coin;
  const { large } = coin1;
  const { eur, aed, ars, bch, bdt, bits, jpy, kwd, usd } = coin2;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src={large}
              alt=""
              style={{ marginTop: "100px", marginLeft: "50px" }}
            />
          </div>
          <div className="col-6">
            <h1>
              {name} - {symbol}
            </h1>
            <div style={{fontSize:"20px",fontWeight:"bold",marginTop:"40px"}}>
              <p>1 {name} : {eur} Euro</p>
              <p>1 {name} : {aed} Aed</p>
              <p>1 {name} : {ars} Ars</p>
              <p>1 {name} : {bch} Bch</p>
              <p>1 {name} : {bdt} Bdt</p>
              <p>1 {name} : {bits} Bits</p>
              <p>1 {name} : {jpy} Jpy</p>
              <p>1 {name} : {kwd} Kwd</p>
              <p>1 {name} : {usd} Usd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
