import React from "react";

import FeaturesIcon from "@/components/FeaturesIcon";

const Features = () => {
  return (
    <div className="features-root">
      <div className="main-container-root">
        <div className="features-title-section">
          <img
            src="/assets/icons/revvit-icon.png"
            alt="title-icon"
            className="title--image"
          />
          <h2 className="title-text">
            Amazing&nbsp;
            <span className="text-primary">Features</span>
          </h2>
        </div>
        <div className="features-img-section">
          <div className="features-img-wraper">
            <div className="features-img-card">
              <img
                src="/assets/images/mobile.png"
                alt="Logo"
                className="features-img"
              />
            </div>
            <div className="features-contant-section">
              <div className="features-contant-wraper">
                <FeatureBox
                  title="Robust Search Functionality"
                  description="Strong search functionality feature helps save time and removes the need for pre-searching before making transactions."
                />
                <FeatureBox
                  title="Real-time User Notfications"
                  description="Users are notified in real-time about new or modified listings. Sellers can also get real-time notifications on new messages from potential buyers."
                />
              </div>
              <div className="features-contant-wraper">
                <FeatureBox
                  title="User Profiles"
                  description="Buyers and sellers can create customizable profiles, upload photos, and detail their interests and preferences. Potential buyers can review sellers' feedback and ratings, making it easier to assess them."
                />
                <FeatureBox
                  title="In-app Messaging"
                  description="In-app messaging functionality allows efficient communication between both parties, and it often reduces the time taken to communicate back and forth to finalize the terms of transactions."
                />
              </div>
              <div className="features-contant-wraper">
                <FeatureBox
                  title="Geolocation Features"
                  description="These features let users view sellers or buyer's location on the map and enable search results based on geographical proximity."
                />
                <FeatureBox
                  title="Analytics"
                  description="With analytics, sellers can analyze data trends and make informed strategic decisions, capitalize on real-time market changes, and improve sales performance."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

const FeatureBox = ({ title, description }) => (
  <div className="features-contant-box">
    <h4 className="features-title">
      <FeaturesIcon />
      {title}
    </h4>
    <p className="features-details">{description}</p>
  </div>
);
