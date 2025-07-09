"use client";
import { ReactNode } from "react";
import { MainInput } from "./input";
//import { useState } from "react"

type Fields<> = {
  type: "text" | "email" | "password";
  name?:
    | "text"
    | "username"
    | "fname"
    | "lname"
    | "email"
    | "password"
    | "cpassword";
  placeholder?: string;
  className?: string;
  autoComplete?: "on" | "off";
};

type FieldConfig = {
  subhandler: string;
  fields: Fields[];
};

type Props = FieldConfig & {
  children?: ReactNode;
  className?: string;
};

const FieldConfigs: { [key: string]: FieldConfig } = {
  login: {
    subhandler: "",
    fields: [
      { type: "email", placeholder: "Email", autoComplete: "on" },
      { type: "password", placeholder: "Password", autoComplete: "on" },
    ],
  },
  register: {
    subhandler: "",
    fields: [
      { type: "text", name: "username", placeholder: "Username" },
      { type: "email", placeholder: "Email" },
      { type: "password", placeholder: "Password" },
      { type: "password", name: "cpassword", placeholder: "Confirm Password" },
    ],
  },
};

const MainForm = ({ className, children, fields = [] }: Props) => {
  return (
    <div
      className="
        w-full
        m-5
        "
    >
      <form
        className={`
                ${className}
                `}
      >
        {fields.map((field, idx) => (
          <MainInput
            key={field.name ?? idx}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder ?? 'off'}
            autoComplete={field.autoComplete}
          />
        ))}
        {children}
      </form>
    </div>
  );
};

export { FieldConfigs, MainForm, type Fields };

