/** @format */

import React from "react";
import "./styles.css";
import orderbookData from "./orderbook.json";

function OrderBook() {
  const { asks, bids } = orderbookData;

  return (
    <div className="container">
      <div className="order-book-container">
        <div>
          <h2 className="order-book-heading">매도호가</h2>
          <div className="order-book-content">
            <div className="order-book-row order-book-row-bold">
              <div>가격</div>
              <div>수량</div>
              <div>누적 수량</div>
            </div>
            {asks.map((ask) => (
              <div className="order-book-row">
                <div className="order-book-price-red">{ask.price}</div>
                <div style={{ textAlign: "right" }}>{ask.amount}</div>
                <div style={{ textAlign: "right" }}>{ask.total}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="order-book-heading">매수호가</h2>
          <div className="order-book-content">
            <div className="order-book-row order-book-row-bold">
              <div>가격</div>
              <div>수량</div>
              <div>누적 수량</div>
            </div>
            {bids.map((bid) => (
              <div className="order-book-row">
                <div className="order-book-price-green">{bid.price}</div>
                <div style={{ textAlign: "right" }}>{bid.amount}</div>
                <div style={{ textAlign: "right" }}>{bid.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="order-input-container">
        <h2 className="order-input-heading">주문 입력창</h2>
        <div className="order-input-label">
          <label htmlFor="orderType">주문 유형</label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="buy"
              name="orderType"
              value="buy"
              defaultChecked
            />
            <label htmlFor="buy">매수</label>
          </div>
          <div>
            <input type="radio" id="sell" name="orderType" value="sell" />
            <label htmlFor="sell">매도</label>
          </div>
        </div>
        <div className="order-input">
          <label htmlFor="price">가격</label>
          <input type="number" id="price" placeholder="가격을 입력하세요" />
        </div>
        <div className="order-input">
          <label htmlFor="quantity">수량</label>
          <input type="number" id="quantity" placeholder="수량을 입력하세요" />
        </div>
        <button className="order-button">주문하기</button>
      </div>
    </div>
  );
}

export default OrderBook;
