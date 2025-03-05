import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // استيراد Framer Motion

interface Post {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <motion.li
            key={post._id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            className="mb-4 p-4 shadow rounded-lg bg-white"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">
              By {post.author} - {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <Link to={`/posts/${post._id}`} className="text-blue-500">
              Read more
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
