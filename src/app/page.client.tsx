"use client";
import { artData } from "./art-data";
import "./style.css";
import { useState } from "react";

import FirstView from "./gallery-page/first-view";
import GalleryPagination from "../components/gallery-pagination";
import GalleryModal from "../components/gallery-modal";
import GalleryView from "./gallery-page/gallery-view";
const ITEMS_PER_PAGE = 12;

export const ClientPage = () => {
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
      <FirstView />

      <GalleryView
        currentPage={currentPage}
        currentItems={currentItems}
        setSelected={setSelected}
      />

      <GalleryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <GalleryModal selected={selected} setSelected={setSelected} />
    </main>
  );
};
