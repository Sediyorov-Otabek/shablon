import React from "react";
import { useStateValue } from "../../context";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [data, dispatch] = useStateValue();
  console.log(data);
  let items = data?.cart.map((product) => (
    <div
      className="border w-full p-3 mb-7 flex  gap-11 items-center relative"
      key={product.id}
    >
      <div className="w-[350px]  h-60  rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 hover:scale-105"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col gap-4">
          <p className="text-[20px] font-medium">{product.title}</p>
          <p className="w-[70%] text-[14px] ">{product.description}</p>
          <strong className="text-green-500">{product.weight} weight</strong>
          <strong className="text-red-500">{product.price} USD</strong>
        </div>
        <div className="absolute top-[5px] left-[10px]">
          <button>
            <FaHeart
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
              className="text-20px hover:text-red-900"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="border flex items-center justify-center hover:bg-red-600 hover:text-white hover:transition-all py-1 w-[140px] font-[500] bg-slate-400"
          onClick={() => dispatch({ type: "CART", payload: product })}
        >
          <MdDelete />
          delete
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-2">{items}</div>
    </div>
  );
};

export default Cart;
