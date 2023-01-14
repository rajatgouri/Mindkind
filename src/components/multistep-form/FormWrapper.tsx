import React from "react";

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-xl font-bold">{title}</h2>
      <div>{children}</div>
    </>
  );
}
