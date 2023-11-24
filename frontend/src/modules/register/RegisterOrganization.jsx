import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, Input } from "../../elements";
import { ChevronIcon, EmailIcon, LockIcon, MessageIcon } from "../../icons";

const RegisterOrganization = () => {
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
        username: data.username,
        password: data.password,
        role: "organization",
      });

      const res = await fetch(`${process.env.REACT_APP_API_HOST}/signup`, {
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

      toast.success("Successfully registered!");
      navigate("/profile", { replace: true });
    } catch (e) {
      if (e.message) toast.error(e.message);
      else toast.error("Something went wrong!");

      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold">Register your organization</h2>
      <p className="mt-2 max-w-xs text-gray-600">
        Please provide us with this information in order to register an
        organization
      </p>

      <div className="flex flex-col items-start mt-8 w-full">
        <p className="text-gray-600 text-sm">Organization email</p>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              className="mt-2 w-full"
              leading={<EmailIcon />}
              placeholder="Enter your organization's email"
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

      <hr className="mt-6 w-full border-b border-gray-200" />

      <div className="flex flex-col items-start mt-4 w-full">
        <p className="text-gray-600 text-sm">Username</p>
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              className="mt-2 w-full"
              placeholder="Choose a username for your organization"
              leading={<MessageIcon />}
              {...field}
            />
          )}
        />
      </div>

      <Button
        className="mt-8 lg:mt-auto w-full"
        trailing={<ChevronIcon />}
        loading={loading}
        variant="fill"
        type="submit"
        disabled={!isValid}
      >
        Register
      </Button>
    </form>
  );
};

export { RegisterOrganization };
