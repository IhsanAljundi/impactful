import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PostCard } from "../../components";
import { LoadingIcon } from "../../icons";

export function Home() {
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
        setPosts(posts.slice(0, 2));
      } catch (e) {
      } finally {
        setPostsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="flex flex-col min-h-[100vh]">
      <header className="sticky top-0 z-50 py-4 bg-white border-b border-gray-300">
        <div className="container flex items-center">
          <Link className="flex items-center justify-center" href="">
            <span className="font-semibold tracking-wide">🌏 Impactful</span>
          </Link>

          <nav className="flex gap-4 sm:gap-6 items-center ml-auto">
            <Link
              className="hidden lg:block text-sm font-medium hover:underline underline-offset-4"
              to="/feeds"
            >
              Social Feeds
            </Link>

            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="px-4 py-2 bg-peach rounded-lg text-sm font-medium hover:underline underline-offset-4"
              to="/register"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      <section className="container flex flex-col items-center py-32 lg:py-44 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl lg:text-6xl font-semibold">Join Impactful</h1>
          <p className="mt-4 max-w-xs lg:max-w-md text-xl text-gray-700">
            A platform for environmental activists to connect, collaborate, and
            create change.
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-4">
          <Link
            className="px-4 py-2 bg-peach rounded-md text-sm font-semibold transition hover:scale-105"
            to="/register"
          >
            Join Now
          </Link>

          <Link
            className="px-4 py-2 border border-peach rounded-md text-sm font-semibold transition hover:scale-105"
            to="#learn-more"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-12 bg-peach">
        <div className="container grid lg:grid-cols-3 gap-12 max-lg:text-center">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Campaign Creation</h3>
            <p className="mt-4 text-gray-800">
              Create and manage your own environmental campaigns with our
              user-friendly interface.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Volunteering</h3>
            <p className="mt-4 text-gray-800">
              Join campaigns and contribute your time and effort to causes that
              matter to you.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Donations</h3>
            <p className="mt-4 text-gray-800">
              Support campaigns financially with secure, transparent donation
              options.
            </p>
          </div>
        </div>
      </section>

      <section className="container grid lg:grid-cols-[1fr_2fr] items-center gap-8 py-32 lg:py-44">
        <div className="flex flex-col max-lg:text-center">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl/tight">
            Ongoing Campaigns
          </h2>

          <p className="mt-2 text-lg text-gray-700">
            Join us in making a difference.
          </p>
        </div>

        {isPostsLoading || !posts.length ? (
          <div className="flex items-center justify-center">
            <LoadingIcon className="w-4 h-4 animate-spin" />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <footer className="shrink-0 mt-auto py-6 border-t border-gray-300">
        <div className="container flex flex-col sm:flex-row gap-2 items-center text-xs">
          <p className="text-gray-700">© Impactful. All rights reserved.</p>

          <nav className="sm:ml-auto flex gap-4">
            <Link className="hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link className="hover:underline underline-offset-4">Privacy</Link>
            <Link className="hover:underline underline-offset-4">Contact</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
