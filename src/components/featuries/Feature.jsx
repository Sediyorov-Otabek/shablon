import React, { memo } from "react";
import burger from "../../assets/Figure.png";
import img2 from "../../assets/Figure (1).png";
import img3 from "../../assets/Figure (2).png";
import img4 from "../../assets/Figure (3).png";
import img5 from "../../assets/Figure (4).png";
import img6 from "../../assets/Figure (5).png";
import img7 from "../../assets/Figure (6).png";
import img8 from "../../assets/Figure (7).png";
import img9 from "../../assets/Figure (8).png";
import img10 from "../../assets/Figure (10).png";
import img11 from "../../assets/banner-1.png.png";
import img12 from "../../assets/banner-2.png.png";
import img13 from "../../assets/banner-3.png.png";
const Feature = () => {
  return (
    <div className="container mb-24 mt-14">
      <div className="feature__wrap flex flex-col gap-6">
        <div className="flex items-center justify-start gap-6">
          <b className="text-3xl">Featured Categories</b>
          <ul className="flex items-center justify-center gap-6">
            <li className=" hover:text-green-600 ">
              <p>Cake & Milk</p>
            </li>
            <li className=" hover:text-green-600">
              <p>Coffes & Teas</p>
            </li>
            <li className=" hover:text-green-600">
              <p>Pet Foods</p>
            </li>
            <li className=" hover:text-green-600">
              <p>Vegetables</p>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 justify-between overflow-x-scroll">
          <div className="flex    w-[240px] rounded-2xl items-center justify-center pt-5 flex-col bg-lime-200">
            <img className="mb-4" src={burger} alt="" />
            <b>Cake & Milk</b>
            <p className="text-gray-500">26 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-red-200">
            <img className="mb-4" src={img2} alt="" />
            <b>Oganic Kiwi</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-blue-200">
            <img className="mb-4" src={img3} alt="" />
            <b>Snack</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-slate-200">
            <img className="mb-4" src={img4} alt="" />
            <b>Vegetables</b>
            <p className="text-gray-500">58 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-purple-200">
            <img className="mb-4" src={img5} alt="" />
            <b>Strawberry</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-yellow-200">
            <img className="mb-4" src={img6} alt="" />
            <b>Black plum</b>
            <p className="text-gray-500">32 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-green-200">
            <img className="mb-4" src={img7} alt="" />
            <b>Custard apple</b>
            <p className="text-gray-500">21 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-pink-200">
            <img className="mb-4" src={img8} alt="" />
            <b>Coffe & Tea</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-pink-200">
            <img className="mb-4" src={img9} alt="" />
            <b>Custard apple</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex   w-60 rounded-2xl items-center justify-center flex-col pt-5 bg-yellow-200">
            <img className="mb-4" src={img10} alt="" />
            <b>Coffe & Tea</b>
            <p className="text-gray-500">28 items</p>
          </div>
        </div>
        <div className="big__card overflow-x-scroll sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex gap-4 ">
          <div className="relative">
            <img src={img11} alt="" />
            <div className=" flex flex-col  gap- md:top-4 absolute w-1/2 left-10 lg:top-12">
              <b className="text-2xl sm:text-2xl   md:text-base lg:text-2xl  ">
                Everyday Fresh & Clean with Our Products
              </b>
              <button className="p-2 bg-green-600 w-24 rounded-2xl text-white">
                shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={img12} alt="" />
            <div className=" flex flex-col gap-4 md:top-4 absolute w-1/2 left-10 lg:top-12">
              <b className="sm:text-2xl   md:text-base lg:text-2xl   ">
                Everyday Fresh & Clean with Our Products
              </b>
              <button className="p-2 bg-green-600 w-24 rounded-2xl text-white">
                shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={img13} alt="" />
            <div className=" flex flex-col gap-4 md:top-4 absolute w-1/2 left-10 lg:top-12">
              <b className="sm:text-2xl   md:text-base lg:text-2xl    ">
                Everyday Fresh & Clean with Our Products
              </b>
              <button className="p-2 bg-green-600 w-24 rounded-2xl text-white">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Feature);
