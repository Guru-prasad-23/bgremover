import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16 ">
      <h1 className="text-center text-2xl  md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the magic, Try now
      </h1>
      <div className="text-center mb-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          htmlFor="upload2"
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-600 hover:scale-105 transition-all duration-300"
        >
          <img src={assets.upload_btn_icon} alt="" width={20} />
          <p className="text-white text-sm font-semibold"> Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
