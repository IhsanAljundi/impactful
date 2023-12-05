import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Loader } from "../../elements";
import { PostCard } from "../../components";

import { ReactComponent as EmptyIllustration } from "./illustrations/empty.svg";
import { TrendingTopics } from "./TrendingTopics";

export function Feeds() {
  const [isPostsLoading, setPostsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `${process.env.REACT_APP_API_HOST}/posts`;
        const res = await fetch(url);

        if (!res.ok) {
          const { error } = await res.json();
          throw new Error(error);
        }

        const posts = await res.json();
        setPosts(posts);
      } catch (e) {
        if (e.message) toast.error(e.message);
        else toast.error("Something went wrong!");
      } finally {
        setPostsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isPostsLoading) return <Loader />;
  return (
    <main className="container grid grid-cols-1 lg:grid-cols-[20rem_1fr_20rem] gap-16 py-8 lg:py-16 min-h-screen">
      <div></div>

      <div className="flex flex-col">
        <TrendingTopics className="lg:hidden mb-12" />

        <h1 className="text-4xl font-semibold max-lg:text-center">
          Social Feeds
        </h1>

        {posts && posts.length > 0 ? (
          <div className="flex flex-col mt-6 space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-6">
            <EmptyIllustration className="w-64 aspect-square" />
            <p>Nobody has posted anything yet</p>
          </div>
        )}
      </div>

      <TrendingTopics className="hidden lg:block" />
    </main>
  );
}
