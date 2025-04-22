"use client";
import Image from "next/image";
import { artData } from "./art-data";
import "./style.css";

export const GalleryView = () => {
  return (
    <main className="bg-gray-900 flex flex-col items-center justify-center ">
      <h1
        className="text-white text-4xl mb-6 pt-50 pb-50 font-bold "
        style={{
          fontFamily: "DM Serif Text",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        Gallery
      </h1>
      <div className="grid grid-cols-1 gap-4  ">
        {artData.map((src) => (
          <Image
            width={300}
            height={300}
            key={src}
            src={`/art/${src}`}
            alt=""
            className="hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </main>
  );
};
