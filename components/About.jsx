import { assets, infoList } from "../assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolor eius quos natus iste. Sed aspernatur cum ducimus porro et
            reiciendis id, expedita nisi culpa, aperiam consectetur soluta
            veniam sint.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-gradient-to-bl from-amber-100 to-sky-100 hover:-translate-y-3 duration-500 hover:border-1 hover:border-sky-300 hover:text-2xl"
              >
                <Image src={icon} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
