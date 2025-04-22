import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const GalleryPagination: React.FC<GalleryPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
              onClick={() => onPageChange(i + 1)}
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
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="text-white p-2 rounded-md disabled:opacity-40 "
          >
            <ChevronRight size={20} />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default GalleryPagination;
