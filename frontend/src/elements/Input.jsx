import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef(
  ({ id, className, name, leading, trailing, ...rest }, ref) => (
    <label
      className={twMerge(
        "flex items-center space-x-4 py-3 px-4 border border-gray-300 rounded-2xl",
        className
      )}
      htmlFor={id || name}
    >
      {leading}

      <input
        ref={ref}
        id={id || name}
        className="w-full focus:outline-none"
        {...rest}
      />

      {trailing}
    </label>
  )
);

export { Input };
