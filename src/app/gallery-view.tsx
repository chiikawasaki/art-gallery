"use client";
import Image from "next/image";
import { artData } from "./art-data";
import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 12; //12個づつ表示

export const GalleryView = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(artData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = artData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {currentItems.map((src) => (
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

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="text-white flex items-center hover:text-indigo-900 hover:bg-white p-2 rounded-md "
              >
                <ChevronLeft size={20} />
              </button>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(i + 1)}
                  className={`${
                    currentPage === i + 1
                      ? "text-indigo-400 font-bold"
                      : "text-white"
                  }`}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                className="text-white flex items-center  hover:text-indigo-900 hover:bg-white p-2 rounded-md "
              >
                <ChevronRight size={20} />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};
