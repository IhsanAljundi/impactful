import { Link } from "react-router-dom";
import { ChatIcon, HeartIcon } from "../../icons";

const PostCard = ({ className, post }) => (
  <Link className={className} to={`/post/${post.id}`}>
    <article className="overflow-clip flex flex-col transition hover:drop-shadow-lg">
      <img
        className="w-full aspect-[10/3] object-cover rounded-t-2xl"
        src={post.cover}
        alt=""
      />

      <div className="flex flex-col p-6 bg-white border-x border-b border-gray-300 rounded-b-2xl">
        <p className="text-sm text-gray-700">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
        <p className="mt-1 text-sm text-gray-700 line-clamp-4 text-ellipsis">
          {post.content}
        </p>

        <div className="flex items-end justify-between mt-2 text-gray-700">
          <p className="text-sm">
            By{" "}
            <Link
              className="underline hover:font-semibold"
              to={`/profile/${post.user.username}`}
            >
              {post.user.username}
            </Link>
          </p>

          <div className="flex items-center">
            <HeartIcon className="w-5 h-5 transition hover:scale-105" />
            <p className="ml-1">{post.likes.length || 0}</p>

            <ChatIcon className="ml-2 w-5 h-5 transition hover:scale-105" />
            <p className="ml-1">{post.comments.length || 0}</p>
          </div>
        </div>
      </div>
    </article>
  </Link>
);

export { PostCard };
