import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 px-16 pt-8">
      <h1 className="text-2xl font-bold text-black sm:text-3xl">{title}</h1>
      <p className="mt-1.5 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Title;
