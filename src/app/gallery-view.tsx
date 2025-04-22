"use client";
import Image from "next/image";
import { artData } from "./art-data";
import "./style.css";
import { motion } from "framer-motion";

export const GalleryView = () => {
  return (
    <main className="bg-gray-900 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-4xl mb-6 pt-50 pb-50 font-bold"
        style={{
          fontFamily: "DM Serif Text",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        Gallery
      </motion.h1>

      <div className="grid grid-cols-1 gap-4">
        {artData.map((src) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={300}
              height={300}
              src={`/art/${src}`}
              alt=""
              className="hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};
