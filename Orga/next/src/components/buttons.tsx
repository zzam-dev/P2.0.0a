"use client";
import { ReactNode } from "react";
import { useState } from "react";

type Props = {
  label?: string;
  classNameI?: string;
  classNameII?: string;
  switchI?: string;
  switchII?: string;
};

const MainButton = ({ label, classNameI }: Props): ReactNode => (
  <button
    className={`
        bg-blue-700
        w-full
        p-2
        rounded
        text-white
        text-lg
        shadow-blue-500/80
        hover:shadow-[0_0_10px]
        hover:bg-blue-600
        transition
        duration-300
        select-none
        cursor-pointer
        ${classNameI}
    `}
  >
    {label}
  </button>
);

const SwitchButton = ({
  classNameI,
  classNameII,
  switchI,
  switchII,
}: Props): ReactNode => {
const [log, setLog] = useState(false);
  return (
    <div
      className={`
    z-10
    top-5
    p-1
    bg-blue-800
    shadow-black
    inset-shadow-lg
    cursor-pointer
    flex
    overflow-hidden
    rounded-lg
  `}
        tabIndex={0}    
        onKeyDownCapture={() => { setLog(!log); console.log(log); }}    
    onClick={() => { setLog(!log); console.log(log); }}
    >


      <div
        className={`
      w-1/2 h-full
      flex items-center justify-center
      transition-transform duration-400 ease-out
      text-base font-bold text-white/50
      translate-x-0
      
      ${log? 'translate-x-0':'translate-x-full'}
    `}
      >
        {switchII}
      </div>      
      <div
        className={`
      relative
      w-1/2 h-full
      bg-white
      rounded
      shadow-[0_0_15px_#fffa]
      text-black
      flex items-center justify-center
      font-bold tracking-tighter
      transition-transform duration-400 ease-out
      ${log? 'translate-x-0':'-translate-x-full'}
      
    `}
      >
        {switchI}
      </div>
    </div>
  );
};
export { MainButton, SwitchButton };
