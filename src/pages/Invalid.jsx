import React from "react";
import { Link } from "react-router-dom";

const Invalid = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] text-slate-200 font-mono px-4">
      <h1 className="text-[120px] font-bold text-[#63D0FF] leading-none">
        404
      </h1>

      <p className="text-2xl mt-4">Page not found</p>

      <p className="text-slate-400 mt-2 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 border border-[#63D0FF] text-[#63D0FF] rounded hover:bg-[#63D0FF] hover:text-[#030712] transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default Invalid;
