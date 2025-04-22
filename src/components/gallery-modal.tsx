import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type GalleryModalProps = {
  selected: string | null;
  setSelected: (src: string | null) => void;
};

const GalleryModal: React.FC<GalleryModalProps> = ({
  selected,
  setSelected,
}) => {
  return (
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
  );
};

export default GalleryModal;
