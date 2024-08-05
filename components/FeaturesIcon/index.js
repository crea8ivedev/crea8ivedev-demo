import React from "react";
import Image from "next/image";

const FeaturesIcon = () => {
  return (
    <div>
      <Image
        src="/assets/slash-icons/red.png"
        alt="Logo"
        height={0}
        width={0}
        sizes="100vw"
        className="features-title-img"
      />
      <Image
        src="/assets/slash-icons/black.png"
        alt="Logo"
        height={0}
        width={0}
        sizes="100vw"
        className="features-title-img-2"
      />
    </div>
  );
};

export default FeaturesIcon;
