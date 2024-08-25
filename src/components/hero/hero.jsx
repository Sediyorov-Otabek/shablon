import React, { memo } from "react";
import { IoIosSend } from "react-icons/io";
import "./Hero.scss";
import heroimg from "../../assets/hero.jpg";
const hero = () => {
  return (
    <div className="container">
      <div className="hero_wrap relative w-full  ">
        <img className="w-full" src={heroimg} alt="" />
        <div className="absolute position__card flex flex-col sm:gap-3 md:gap-5 lg:gap-5  lg:left-32 top-[20%] lg:top-32 w-1/2">
          <b className="sm:text-lg md:text-4xl lg:text-7xl">
            Fresh Vegetables Big discount
          </b>
          <p className="sm:text-base md:text-xl lg:text-3xl">
            Save up to 50% off on your first order
          </p>
          <div className="flex inputs items-center rounded-3xl sm:w-28 bg-white w-64">
            <form
              className="flex items-center bg-white rounded-3xl pl-3 sm:p-1"
              action=""
            >
              <IoIosSend />
              <input
                className="outline-none pl-3"
                placeholder="Your emaill address"
                type="text"
              />
              <button className="bg-green-700 p-3 sm:p-1 rounded-3xl text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(hero);
