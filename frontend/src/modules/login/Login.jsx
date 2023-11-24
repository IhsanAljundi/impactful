import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, Input } from "../../elements";
import { ChevronIcon, EmailIcon, LockIcon } from "../../icons";
import { ReactComponent as WelcomeIllustration } from "./illustrations/welcome.svg";

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const body = JSON.stringify({
        email: data.email,
        password: data.password,
      });

      const res = await fetch(`${process.env.REACT_APP_API_HOST}/login`, {
        method: "POST",
        headers,
        body,
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error);
      }

      const { token } = await res.json();
      localStorage.setItem("token", token);

      toast.success("Successfully logged in!");
      navigate("/profile", { replace: true });
    } catch (e) {
      if (e.message) toast.error(e.message);
      else toast.error("Something went wrong!");

      setLoading(false);
    }
  };

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2 gap-16 py-8 lg:py-16 min-h-screen">
      <div className="flex flex-col items-center justify-center p-4 pb-8 text-center border border-gray-300 rounded-2xl">
        <WelcomeIllustration className="w-3/4 lg:w-1/2" />
        <h2 className="lg:mt-8 text-2xl font-semibold">Welcome Back!</h2>
        <p className="mt-2 max-w-xs text-gray-600">
          Continue your contribution to projects, track your carbon footprint,
          and earn rewards for taking climate action
        </p>
      </div>

      <form
        className="flex flex-col items-center text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold">Login to your account</h2>
        <p className="mt-2 max-w-xs text-gray-600">
          Please provide your account identification to login
        </p>

        <div className="flex flex-col items-start mt-8 w-full">
          <p className="text-gray-600 text-sm">Email address</p>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="mt-2 w-full"
                leading={<EmailIcon />}
                placeholder="Enter your email"
                type="email"
                {...field}
              />
            )}
          />
        </div>

        <div className="flex flex-col items-start mt-4 w-full">
          <p className="text-gray-600 text-sm">Password</p>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="mt-2 w-full"
                placeholder="Create a strong password"
                leading={<LockIcon />}
                type="password"
                {...field}
              />
            )}
          />
        </div>

        <p className="mt-8 lg:mt-auto">
          Doesn't have an account?{" "}
          <Link className="text-blue font-semibold" to="/register">
            Register
          </Link>
        </p>

        <Button
          className="mt-2 w-full"
          trailing={<ChevronIcon />}
          loading={loading}
          variant="fill"
          type="submit"
          disabled={!isValid}
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export { Login };
