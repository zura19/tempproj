import { useEffect, useState } from "react";
import { getPosts } from "../services/postAPI";

interface IPost {
  id: number;
  title: string;
  body: string;
}

export default function PostPage() {
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(posts);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const data = await getPosts();
        setPosts(data);
        //
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        setError(error.message as string);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className="posts-page">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <ul className="posts-list ">
        {posts.map((post) => (
          <li className="bg-amber-300  px-2 py-5 rounded-md" key={post.id}>
            <h2 className="font-semibold text-xl">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
