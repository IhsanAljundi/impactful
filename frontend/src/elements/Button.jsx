import { forwardRef } from "react";

import { twMerge } from "tailwind-merge";
import { LoadingIcon } from "../icons";

const Button = forwardRef(
  (
    {
      className,
      variant,
      leading,
      trailing,
      loading,
      disabled,
      children,
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      className={twMerge(
        "relative flex items-center justify-center p-4 text-gray-900 font-semibold rounded-2xl transition",
        "disabled:cursor-not-allowed disabled:text-gray-700",
        variant === "fill" && "bg-peach disabled:bg-gray-200 hover:opacity-90",
        variant === "outline" && "bg-white border border-gray-300",
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      <div className="absolute top-1/2 left-4 -translate-y-1/2">{leading}</div>

      {loading && <LoadingIcon className="mr-2 w-4 h-4 animate-spin" />}
      {children}

      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        {trailing}
      </div>
    </button>
  )
);

export { Button };
