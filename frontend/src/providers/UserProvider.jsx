import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { isPublicUrl } from "../utils/urls";

import { useDispatch } from "react-redux";
import { setUser } from "../stores/slices/user";

import { Loader } from "../elements";

const UserProvider = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setLoading(false);

      const url = `${process.env.REACT_APP_API_HOST}/profile`;
      const headers = new Headers();
      headers.append("Authorization", `bearer ${token}`);

      try {
        const res = await fetch(url, { headers });

        if (!res.ok) {
          if (res.status === 401 && !isPublicUrl(pathname)) {
            return navigate("/login", { replace: true });
          }

          const { error } = await res.json();
          throw new Error(error);
        }

        const profile = await res.json();
        dispatch(setUser(profile));
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [dispatch, navigate, pathname]);

  if (isLoading) return <Loader />;
  return null;
};

export { UserProvider };
