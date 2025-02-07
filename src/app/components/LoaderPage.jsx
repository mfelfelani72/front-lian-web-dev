import React from "react";
import Loader from "./Loader.jsx";

const LoaderPage = () => {
  return (
    <div className="flex flex-col h-full items-center pb-2 mx-auto w-full md:max-w-[480px] lg:max-w-[640px] xl:max-w-[800px] rounded-[30px] bg-white">
      <main>
        <h1 className="mt-72 text-3xl font-black tracking-tight text-center text-primary md:text-4xl lg:text-5xl xl:text-6xl">
          AIMOONX
        </h1>
        <Loader />
      </main>
    </div>
  );
};

export default LoaderPage;
