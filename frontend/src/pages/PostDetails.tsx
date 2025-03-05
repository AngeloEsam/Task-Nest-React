import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Post {
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(res.data); 
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">
        By {post.author} - {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="mt-4">{post.content}</div>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
      >
        Back
      </button>
    </div>
  );
}

export default PostDetails;
