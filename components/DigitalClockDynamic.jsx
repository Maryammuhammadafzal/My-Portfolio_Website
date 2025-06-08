"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { nanoid } from "nanoid";

export default function DigitalClock() {
  const [time, setTime] = useState(null);
  const formattedDate = format(time || new Date(), "EEE dd MMM").toUpperCase();

  useEffect(() => {
      setTime(new Date())
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time?.getHours().toString().padStart(2, "0");
  const minutes = time?.getMinutes().toString().padStart(2, "0");
  const seconds = time?.getSeconds().toString().padStart(2, "0");
  
  return (
    <div
      aria-labelledby="Digital Clock"
      className={`flex flex-col items-center justify-between gap-6 bg-white rounded-[20px] w-full max-w-[525px] md:max-w-[725px] xl:max-w-[525px] md:aspect-[288/80] lg:aspect-[525/258]
     p-6`}
    >
      {/* w-[288px] h-[140px] sm:w-[525px] sm:h-[258px] lg:w-[343px] lg:h-[150px] aspect-[288/80]
      xl:w-[525px] xl:h-[258px] */}
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-sans">My Local Time </p>
        <p className="text-gray-400 text-xl font-sans uppercase">{formattedDate}</p>
      </div>
      <div className="flex justify-between gap-2 font-advanced-pixel-lcd w-full font-bold text-6xl responsive-clock">
        {" "}
        {/* //sm:text-5xl lg:text-3xl xl:text-5xl */}
        <span
          key={nanoid()}
          className="relative flex items-center justify-center text-gray-200 w-full"
        >
          88
          <span
            className={`absolute text-black font-advanced-pixel-lcd top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {hours}
          </span>
        </span>
        {/*  */}
        <span key={nanoid()} className="text-black font-advanced-pixel-lcd">
          :
        </span>
        {/*  */}
        <span
          key={nanoid()}
          className="relative flex items-center font-advanced-pixel-lcd justify-center text-gray-200 w-full"
        >
          88
          <span
            className={`absolute text-black font-advanced-pixel-lcd top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {minutes}
          </span>
        </span>
        {/*  */}
        <span key={nanoid()} className="font-advanced-pixel-lcd text-black">
          :
        </span>
        {/*  */}
        <span
          key={nanoid()}
          className="relative flex items-center font-advanced-pixel-lcd justify-center text-gray-200 w-full "
        >
          88
          <span
            className={`absolute text-black font-advanced-pixel-lcd top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {seconds}
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between w-full text-lime-300 ">
        <p className="text-3xl md:text-4xl font-bold uppercase font-sans">HOUR</p>
        <p className="text-3xl md:text-4xl font-bold uppercase font-sans">Second</p>
      </div>
    </div>
  );
}