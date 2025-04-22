import { motion } from "framer-motion";
import "../style.css";

const FirstView: React.FC = () => {
  return (
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
  );
};

export default FirstView;
