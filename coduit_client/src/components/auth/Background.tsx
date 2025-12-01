import React from "react";
import Image from "next/image";
const Background: React.FC = () => {
  return (
    <>
      <div className="w-full h-full absolute z-1 top-0 left-0">
        <Image
          src="/back3.jpg"
          alt="Signup background"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full h-full absolute z-1 top-0 left-0 bg-black/5 backdrop-blur-[3px]"></div>
    </>
  );
};

export default Background;
