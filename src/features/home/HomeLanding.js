import React from "react";
import { useNavigate } from "react-router-dom";

const HomeLanding = () => {
  // hooks
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full xs:w-[25rem] h-full items-center justify-center bg-rose-400">
      <div
        className="text-4xl cursor-pointer"
        onClick={() => {
          navigate("/login");
        }}
      >
        login
      </div>
      <div
        className="text-4xl cursor-pointer"
        onClick={() => {
          navigate("/login");
        }}
      >
        register
      </div>
    </div>
  );
};

export default HomeLanding;
