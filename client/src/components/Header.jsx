import React from "react";
import { assets } from "../assets/assets";
import { PrefetchPageLinks } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left Side  */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden"/>{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Background{" "}
          </span>
          from <br  className="max-md:hidden"/> images for free
        </h1>
        <p className="my-5 text-[15px] text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus
          vel culpa impedit <br  className="max-sm:hidden"/>
          soluta commodi esse reiciendis rem, voluptatibus, rerum eligendi
          officia illo
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1" className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-600 hover:scale-105 transition-all duration-300">
            <img src={assets.upload_btn_icon} alt="" width={20} />
            <p className="text-white text-sm font-semibold"> Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Side  */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
