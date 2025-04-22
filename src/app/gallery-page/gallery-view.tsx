import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type GalleryViewProps = {
  currentPage: number;
  currentItems: string[];
  setSelected: (src: string | null) => void;
};

const GalleryView: React.FC<GalleryViewProps> = ({
  currentPage,
  currentItems,
  setSelected,
}) => {
  return (
    <section className="w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-5">
        <AnimatePresence mode="sync">
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
                blurDataURL={`/art/${src}`}
                className="object-cover w-full h-full  duration-500 "
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                priority={currentPage === 1}
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GalleryView;
