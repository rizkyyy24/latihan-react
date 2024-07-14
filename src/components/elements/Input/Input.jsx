import { forwardRef } from "react";

const Input = forwardRef(({ type, name, placeholder }, ref) => {
  return (
    <input
      type={type}
      id={name}
      className="px-3 py-2 border border-slate-600 w-full text-slate-600 rounded-md"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
