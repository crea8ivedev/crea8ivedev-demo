import React from "react";
import Image from "next/image";

const HeaderIcon = ({ handleMenuIcon }) => {
  return (
    <div className="handle-menu-root" onClick={handleMenuIcon}>
      <div className="header-logo-icon">
        <Image
          src="/assets/slash-icons/red.png"
          alt="slash-icon"
          width={14}
          height={18}
          className="logo-icon-1"
        />
        <Image
          src="/assets/slash-icons/red.png"
          alt="slash-icon"
          width={12}
          height={15}
          className="logo-icon-2"
        />
        <Image
          src="/assets/slash-icons/red.png"
          alt="slash-icon"
          width={10}
          height={12}
          className="logo-icon-3"
        />
      </div>
      <span>menu</span>
    </div>
  );
};

export default HeaderIcon;
