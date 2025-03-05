import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import { Header } from "./components/Header";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.div
        className="p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;
