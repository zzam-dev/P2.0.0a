import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const MainWrapper = ({ children }: Props): ReactNode => {
  return (
    <div
      className="
            w-full
            flex
            justify-center
        "
    >
      {children}
    </div>
  );
};

const Popup = ({ className, children }: Props) => (
  <div
    className={`
            bg-black/15
            max-md:max-w-xs
            min-md:max-w-sm
            w-full
            my-32
            rounded-xl
            backdrop-blur-2xl
            border-white/60
            border-1
            flex
            justify-center
            ${className}
        `}
  >
    {children}
  </div>
);

export { MainWrapper, Popup };
