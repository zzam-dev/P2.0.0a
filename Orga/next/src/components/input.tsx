import { ReactNode } from "react";
import { Fields } from "./forms";

const MainInput = ({
  type,
  name,
  className,
  placeholder,
  autoComplete,
}: Fields): ReactNode => (
    <input
      type={type}
      name={name ?? type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`
        w-full
        bg-black/35
        text-white
        text-sm
        px-4
        py-2
        outline-none
        rounded-md
        rounded-b
        border-b-3
        border-b-blue-500
        placeholder:text-white/80
        focus:bg-blue-500/90
        shadow-blue-500
        focus:shadow-[0_0_15px]
        focus:border-0
        hover:border-b-1
        transition
        duration-600
        select-none
        ${className}
        `}
    />
  );

export { MainInput };

