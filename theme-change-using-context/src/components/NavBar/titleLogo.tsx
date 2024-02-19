import React from "react";
import Image from "next/image";

const TitleLogo = () => {
  return (
    <Image
      src="/main-logo.png"
      alt="logo"
      width={100}
      height={100}
      className="h-10 w-full"
    />
  );
};

export default TitleLogo;
