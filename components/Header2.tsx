"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { FlipWords } from "../components/ui/flip-words";

const Header2 = () => {
  const words = ["Ngoding PHP", "Ngoding Next JS", "SQL Server", "Postgree"];
  return (
    <div className="w-full px-[12%] grid grid-cols-2 gap-x-2">
      <div className="flex h-[40rem] items-center px-4">
        <div className="flex flex-col text-start">
          <p className="flex text-2xl">
            Hallo gaes, saya &nbsp; {" "}
            <span className=" group ">
             
              <span className="group-hover:hidden transition-opacity duration-200">
                Syarif Hidayat
              </span>
              
              <span className="hidden group-hover:inline transition-opacity duration-200 bg-sky-100 p-2 font-bold shadow-lg text-sky-600">
                Syarif Hidayat, S.Kom
              </span>
            </span>
          </p>
          <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Saya sejauh ini bisa
            <FlipWords
              className="bg-gradient-to-bl from-sky-100 to-sky-300 mx-2 rounded-full backdrop-blur-md"
              words={words}
            />{" "}
            <br />
          </div>
        </div>
      </div>
      <div className="">Page Dua</div>
    </div>
  );
};

export default Header2;
