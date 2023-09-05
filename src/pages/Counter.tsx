import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [numberClicks, setNumberClicks] = useState(0);

  useEffect(() => {
    clickHandler();
    return () => {
      clickHandler();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = () => {
    setNumberClicks(numberClicks + 1);
  };

  return (
    <div className="flex bg-primary min-h-screen h-screen p-10 justify-center items-center ">
      <div
        className="bg-darkMintGreen w-1/2 h-1/2 flex justify-center items-center hover:cursor-pointer hover:opacity-80"
        onClick={clickHandler}
      >
        <span className="text-white">My component {numberClicks} clicks</span>
      </div>
    </div>
  );
};
