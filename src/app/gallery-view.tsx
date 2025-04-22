"use client";
import Image from "next/image";
import { artData } from "./art-data";
import "./style.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 12;

export const GalleryView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);

  const totalPages = Math.ceil(artData.length / ITEMS_PER_PAGE);
  const currentItems = artData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-gray-900 flex flex-col items-center justify-center p-10">
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

      <section className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-5">
          <AnimatePresence mode="wait">
            {currentItems.map((src) => (
              <motion.button
                key={src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-xl shadow-lg bg-gray-800 "
                onClick={() => setSelected(src)}
              >
                <Image
                  src={`/art/${src}`}
                  alt="artwork"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                  className="object-cover w-full h-full  duration-500 "
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                  priority={currentPage === 1}
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Pagination className="mt-12">
        <PaginationContent>
          <PaginationItem>
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="text-white p-2 rounded-md disabled:opacity-40 "
            >
              <ChevronLeft size={20} />
            </button>
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(i + 1)}
                className={`mx-1 px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-indigo-500 text-white"
                    : "text-white "
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
              disabled={currentPage === totalPages}
              className="text-white p-2 rounded-md disabled:opacity-40 "
            >
              <ChevronRight size={20} />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={`/art/${selected}`}
              alt="enlarged artwork"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white hover:text-indigo-400"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
