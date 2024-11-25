import * as React from "react";

const TextBlock = ({ children }: { children: React.ReactNode }) => {
  return <span className="inline-block">{children}</span>;
};

export default function Introduction() {
  return (
    <div className="relative text-center">
      <div className="border-b border-r border-dashed border-gray-700">
        <h1 className="inline-block text-white dark:text-white text-8xl font-bold w-full capitalize !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl opacity-1 pb-6 pt-6">
          <TextBlock>Hey,&nbsp;</TextBlock>
          <TextBlock>I'm&nbsp;</TextBlock>
          <TextBlock>Shreyash.&nbsp;</TextBlock>
        </h1>
      </div>
      <div className="border-r border-dashed border-gray-700 py-4">
        <span className="text-gray-300 text-lg">
          I'm a full stack developer with experience in Python, Next.js, and AI/Machine Learning.
          I do independent research, machine learning, gamedev, and other creative work.
        </span>
      </div>
    </div>
  );
}
