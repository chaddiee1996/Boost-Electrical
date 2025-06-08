import { motion } from "framer-motion";

export default function FloatingCallButton() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 md:hidden z-40"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <a 
        href="tel:01206645155" 
        className="bg-boost-orange hover:bg-boost-orange-light text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        <i className="fas fa-phone text-xl"></i>
      </a>
    </motion.div>
  );
}
