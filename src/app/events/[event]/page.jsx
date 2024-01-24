"use client";

import { nominees } from "@/db";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Event() {
  const router = useRouter();
  return (
    <>
      {/* HERO HEADER SECTION */}
      <div className="p-6 relative flex align-middle bg-gradient-to-tr from-indigo-700 via-primary-700 to-secondary-600  ">
        <div className="w-full lg:flex items-center justify-center pb-6 pt-2 mt:pt-4">
          {/* hero text section */}
          <div className="w-full xl:w-[50%] space-y-2 flex flex-col justify-center items-center  text-white">
            <div className="hero-text text-2xl md:text-3xl xl:text-5xl font-black text-center items-center">
              <h2 className="">The Ultimate</h2>
              <h2 className="text-primary-300 outline">Photo</h2>
              <h2>Challenge</h2>
            </div>
            <div className="font-light lg:text-2xl text">
              <p>LET YOUR BEAUTY STAND</p>
            </div>
            <div className="edition border border-white p-2 lg:py-3 lg:px-6 rounded-md lg:text-xl uppercase">
              <h2>Edition One (1)</h2>
            </div>
          </div>

          {/* images */}
          {/* photo cam */}
          <div className="w-1/3">
            <div className="model-image  w-28 h-28 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-96 xl:h-96  absolute -bottom-20 right-6 lg:right-52 md:right-28  xl:right-82 lg:-bottom-28 xl:-bottom-36  flex justify-center items-center z-[10] bg-white rounded-full object-cover ring-4 lg:ring-[6px] ring-white overflow-hidden drop-shadow-md">
              <Image
                objectFit="contain"
                className="!w-full !h-full"
                src={require("/public/assets/images/photo_2022-08-07_20-04-24.jpg")}
                alt="model-image-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 py-24 pt-28 xl:pt-52">
        <div className="container ">
          <h2 className="text-2xl uppercase font-bold mb-6">Nominees</h2>
          <div className="nominees grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-2 md:gap-6 xl:gap-2 justify-center">
            {nominees.map((n, i) => (
              <div
                key={i}
                onClick={() => router.push(`/vote/${n.id}`)}
                className="bg-white drop-shadow-sm cursor-pointer"
              >
                {/* card header */}
                <div className="relative">
                  <div className="event-banner h-[130px] overflow-hidden">
                    <Image
                      src={require("/public/assets/images/photo_2022-08-07_20-04-24.jpg")}
                      alt="Event Banner"
                    />
                  </div>
                  <div className="user-avatar bg-white w-24 h-24 rounded-full overflow-hidden ring-4 ring-white drop-shadow absolute -bottom-12 left-5">
                    <Image
                      src={n.image}
                      alt="User Avatar"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>

                {/* card body */}
                <div className="p-5 pt-16">
                  <h4 className="text-xl font-semibold">{n.name}</h4>
                  <p className="text-slate-500">
                    @{n.name.split(" ")[0].toLocaleLowerCase()}
                  </p>

                  <button className="bg-gradient-to-tr from-secondary-600 to-primary-800 py-2 mt-4 px-3 text-white rounded  ">
                    Vote Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
