import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import toast from "react-hot-toast";
import { Loader } from "../../elements";
import { PostCard } from "../../components";

import { ProfileStatistics } from "./ProfileStatistics";

import { EditIcon } from "../../icons";
import { ReactComponent as EmptyIllustration } from "./illustrations/empty.svg";

export function Profile() {
  const { username } = useParams();
  const currentUser = useSelector((state) => state.user.user);

  const [isProfileLoading, setProfileLoading] = useState(true);
  const [profile, setProfile] = useState(currentUser);

  useEffect(() => {
    if (!username || username === currentUser?.useEffect) {
      setProfile(currentUser);
    }
  }, [currentUser, username]);

  useEffect(() => {
    if (!username || username === currentUser?.username) {
      return setProfileLoading(false);
    }

    const fetchProfile = async () => {
      try {
        const url = `${process.env.REACT_APP_API_HOST}/profile/${username}`;
        const res = await fetch(url);

        if (!res.ok) {
          const { error } = await res.json();
          throw new Error(error);
        }

        const profile = await res.json();
        setProfile(profile);
      } catch (e) {
        if (e.message) toast.error(e.message);
        else toast.error("Something went wrong!");
      } finally {
        setProfileLoading(false);
      }
    };

    fetchProfile();
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  const [isPostsLoading, setPostsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!profile) return;

    const fetchPosts = async () => {
      try {
        const url = `${process.env.REACT_APP_API_HOST}/posts/${profile.id}`;
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
  }, [profile]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isProfileLoading || isPostsLoading) return <Loader />;

  if (!profile) {
    return (
      <div className="fixed flex items-center justify-center w-screen h-screen">
        Profile not found!
      </div>
    );
  }

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-[20rem_1fr_20rem] gap-16 py-8 lg:py-16 min-h-screen">
      <div></div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center lg:justify-between space-x-4">
          <h1 className="text-4xl font-semibold max-lg:text-center">Profile</h1>
          {(!username || username === currentUser?.username) && <EditIcon />}
        </div>

        <div className="flex flex-col items-center mt-12">
          <div className="relative">
            <img
              className="w-40 aspect-square border-2 border-pink rounded-full"
              alt="Avatar"
              src={
                profile.avatar ??
                `https://api.dicebear.com/7.x/micah/svg?seed=${profile.username}`
              }
            />

            {profile.role === "organization" && (
              <p className="absolute bottom-0 left-1/2 py-2 px-4 font-semibold bg-peach rounded-2xl -translate-x-1/2 translate-y-1/2">
                Official
              </p>
            )}
          </div>

          <h2 className="mt-8 text-2xl font-semibold">{profile.username}</h2>
          <p className="mt-2 text-gray-700">{profile.email}</p>

          {profile.description && (
            <p className="mt-8 text-lg">{profile.description}</p>
          )}
        </div>

        <ProfileStatistics className="lg:hidden mt-12" profile={profile} />

        <div className="flex flex-col mt-12">
          <h1 className="text-2xl font-semibold max-lg:text-center">
            Latest Posts
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
              <p>{profile.username} haven&apos;t posted anything yet</p>
            </div>
          )}
        </div>
      </div>

      <ProfileStatistics className="hidden lg:block" profile={profile} />
    </main>
  );
}
