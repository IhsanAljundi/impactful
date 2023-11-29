import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setProfile as setProfileAction } from "../../stores/slices/profile";

import toast from "react-hot-toast";
import { Loader } from "../../elements";

export function Profile() {
  const { username } = useParams();

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const url = username
        ? `${process.env.REACT_APP_API_HOST}/profile/${username}`
        : `${process.env.REACT_APP_API_HOST}/profile`;

      const token = localStorage.getItem("token");
      const headers = new Headers();
      headers.append("Authorization", `bearer ${token}`);

      try {
        const res = await fetch(url, { headers });

        if (!res.ok) {
          const { error } = await res.json();
          throw new Error(error);
        }

        const profile = await res.json();

        dispatch(setProfileAction(profile));
        setProfile(profile);
      } catch (e) {
        if (e.message) toast.error(e.message);
        else toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) return <Loader />;
  if (!profile) {
    return (
      <div className="fixed flex items-center justify-center w-screen h-screen">
        Profile not found!
      </div>
    );
  }

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-[20rem_1fr_24rem] gap-16 py-8 lg:py-16 min-h-screen">
      <div></div>

      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold max-lg:text-center">Profile</h1>

        <div className="flex flex-col items-center mt-12">
          <img
            className="w-1/2 md:w-40 aspect-square border-2 border-primary rounded-full"
            alt="Avatar"
            src={
              profile.avatar ??
              `https://api.dicebear.com/7.x/micah/svg?seed=${profile.username}`
            }
          />

          <h2 className="mt-8 text-2xl font-semibold">{profile.username}</h2>
          <p className="mt-2 text-gray-700">{profile.email}</p>

          <p className="mt-8 text-lg">{profile.description ?? "..."}</p>
        </div>
      </div>

      <div></div>
    </main>
  );
}
