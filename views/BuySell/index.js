import React from "react";

const BuySell = () => {
  return (
    <div id="buy-sell" className="buy-sell-root">
      <div className="buy-sell-root-inner">
        <div className="buy-sell-wraper">
          <div className="buy-root">
            <img
              src="/assets/images/buyer-car.png"
              alt="Logo"
              className="buy-main-img"
            />
            <div className="buyers-details">
              <div className="slash-title">
                <img
                  src="/assets/slash-icons/white.png"
                  alt="Logo"
                  className="slash-img"
                />
                <h2>Buyers</h2>
              </div>
              <ul>
                <li>REAL-TIME UPDATES ON PRICING & AVAILABILITY</li>
                <li>
                  DETAILED VEHICLE INFORMATION, INCLUDING HISTORY REPORTS AND
                  PHOTOS
                </li>
                <li>CUSTOMIZED SEARCH FILTERS TO FIND THE RIGHT VEHICLES</li>
                <li>
                  MARKET REPORTS AND ANALYTICS TO HELP ADJUST PRICES AND IMPROVE
                  INVENTORY SELECTION AND MANAGEMENT
                </li>
                <li className="buy-sell-price">$199</li>
              </ul>
              <button> Get Started Today!</button>
            </div>
          </div>
        </div>
        <div className="sell-root">
          <div className="buy-root">
            <div className="sellers-details">
              <div className="slash-title">
                <img
                  src="/assets/slash-icons/white.png"
                  alt="Logo"
                  className="slash-img"
                />
                <h2>Sellers</h2>
              </div>
              <ul>
                <li>REAL-TIME UPDATES ON PRICING & AVAILABILITY</li>
                <li>
                  DETAILED VEHICLE INFORMATION, INCLUDING HISTORY REPORTS AND
                  PHOTOS
                </li>
                <li>CUSTOMIZED SEARCH FILTERS TO FIND THE RIGHT VEHICLES</li>
                <li>
                  MARKET REPORTS AND ANALYTICS TO HELP ADJUST PRICES AND IMPROVE
                  INVENTORY SELECTION AND MANAGEMENT
                </li>
                <li className="buy-sell-price"> FREE </li>
              </ul>
              <button> Get Started Today!</button>
            </div>
            <img
              src="/assets/images/seller-car.png"
              alt="Logo"
              className="sell-main-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
