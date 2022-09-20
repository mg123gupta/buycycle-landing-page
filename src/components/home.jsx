import React from "react";
import { motion } from "framer-motion";

import Modals from "../components/modal";
import Reviews from "../components/review";

import cycleMan from "../assets/images/cycleMan.png";
import bicycle from "../assets/images/bicycle.svg";
import headphones from "../assets/images/headphones.svg";
import verified from "../assets/images/verified.svg";
import settings from "../assets/images/settings.svg";

export default function App() {
  return (
    <div>
      <div className="relative">
        <motion.img
          animate={{ transform: "translateY(0px)" }}
          initial={{ transform: "translateY(-100px)" }}
          src={cycleMan}
          alt="cycle"
          className="mx-auto my-4"
        />
        <div
          className="absolute bg-yellow-500 h-1/2 md:h-1/3 mix-blend-color opacity-75 top-1/2 w-9/12 md:w-1/2"
          style={{ borderRadius: "65px 100px 100px 330px", left: "10%" }}
        ></div>
        <div
          className="absolute max-w-xs text-right text-white text-sm md:text-lg font-bold md:w-1/2 top-1/2 py-4 pl-6 flex md:flex-col"
          style={{ left: "8%" }}
        >
          <p>
            <span className="text-xs">NEW MODAL</span>
            <br />
            <span className="text-2xl md:text-5xl">SIAMESE</span>
          </p>
          <div className="flex justify-end pl-6 md:pl-0">
            <button className="text-xs rounded px-3 py-2 text-gray-50 bg-yellow-700 mt-4">
              Shope Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-100 py-3">
        <h1 className="uppercase text-sm">why were the best</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 leading-3 justify-center max-w-3xl mx-auto my-8 text-4xl">
          <div>
            <div className="p-2 w-14 h-14 mx-auto bg-yellow-500 rounded-lg flex">
              <img className="mx-auto" src={verified} alt="verified" />
            </div>
            <p className="text-center mt-2">
              <span className="text-base font-medium leading-3">
                SAFTY BY DESIGN
              </span>
              <br />
              <span className="text-xs">Safty-first</span>
            </p>
          </div>
          <div>
            <div className="p-2 w-14 h-14 mx-auto bg-yellow-500 rounded-lg flex">
              <img className="mx-auto" src={headphones} alt="headphones" />
            </div>
            <p className="text-center mt-2">
              <span className="text-base font-medium leading-3">
                SUPPORT 24/7
              </span>
              <br />
              <span className="text-xs">We support 24h a day</span>
            </p>
          </div>
          <div>
            <div className="p-2 w-14 h-14 mx-auto bg-yellow-500 rounded-lg flex">
              <img className="mx-auto" src={bicycle} alt="bicycle" />
            </div>
            <p className="text-center mt-2">
              <span className="text-base font-medium leading-3">
                EXPERT SERVICE
              </span>
              <br />
              <span className="text-xs">Professionals who know</span>
            </p>
          </div>
          <div>
            <div className="p-2 w-14 h-14 mx-auto bg-yellow-500 rounded-lg flex">
              <img className="mx-auto" src={settings} alt="settings" />
            </div>
            <p className="text-center mt-2">
              <span className="text-base font-medium leading-3">REPAIR</span>
              <br />
              <span className="text-xs">Expert mechanics</span>
            </p>
          </div>
        </div>
      </div>
      <Modals />
      <Reviews />
    </div>
  );
}
