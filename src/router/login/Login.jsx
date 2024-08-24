import { memo } from "react";
import logo from "../../assets/logo.svg fill (1).png";
const Login = () => {
  return (
    <div className="continer">
      <div className="w-1/3 border mb-14 h-1/2 rounded-[5px] mt-14 mx-auto p-8 flex flex-col gap-6">
        <div className="w-full">
          <img className="flex mx-auto" src={logo} alt="" />
        </div>
        <div className="flex flex-col text-start">
          <label className="text-base text-slate-700">Email Address*</label>
          <input
            className="w-full border py-3 pl-1 rounded-md outline-none text-sm"
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col text-start">
          <label className="text-base  text-slate-700">Password*</label>
          <input
            className="w-full border py-3  rounded-md outline-none pl-1 text-sm"
            type="text"
            placeholder="Enter Your password"
          />
        </div>
        <div
          className="flex 
       tems-center justify-between i"
        >
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <p className="text-base  text-slate-700">Remember Me</p>
          </div>
          <p className="text-base  text-slate-700">Forgot Password?</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="w-20 h-10 rounded-md text-sm text-[#fff] bg-green-500 ">
            Login
          </button>
          <p className="text-base  text-slate-700">Signup?</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
