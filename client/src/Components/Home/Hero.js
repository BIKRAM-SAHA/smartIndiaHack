import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <div className="relative h-128 min-w-fit md:mx-10">
      <div className="flex items-center justify-center ">
        <div className="absolute -right-14 top-36">
          <a href="#about" className="flex rotate-90 flex-row items-end ">
            <span className="-translate-y-2 text-3xl font-bold text-slate-300">
              LEARN MORE
            </span>
          </a>
        </div>

        <div className="min-height-75 absolute top-0 right-12 h-14 w-28 rounded-3xl bg-gradient-to-b from-orange-500"></div>
        <h1 className="absolute left-4 top-14 flex flex-col font-semibold text-slate-700">
          <span className="font-pops text-2xl text-slate-500">REALTIME</span>
          <span className="font-pops text-5xl">STUDENT</span>
          <span className="font-pops text-6xl">LEARNING</span>
          <div className="flex flex-row justify-between">
            <i className="uil uil-angle-double-down font-pops text-5xl font-bold"></i>
            <span className="flex justify-end font-pops text-4xl text-slate-500">
              OUTCOME
            </span>
          </div>
        </h1>
        <Player
          className="relative top-64 right-1"
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_yjrdpceb.json"
          style={{ height: "360px", width: "360px" }}
        ></Player>
      </div>
    </div>
  );
}

export default Home;
