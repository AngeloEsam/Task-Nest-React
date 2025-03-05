import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <motion.nav
      className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold">My Blog</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/create" className="hover:text-gray-300">
          Create Post
        </Link>
      </div>
    </motion.nav>
  );
}
