import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/posts", { title, author, content });
      toast.success("Post added successfully! 🎉");
      navigate("/");
    } catch {
      toast.error("An error occurred while adding the post! ❌");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          whileTap={{ scale: 0.95 }}
        >
          Create
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default CreatePost;
