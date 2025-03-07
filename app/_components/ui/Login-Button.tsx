import { useAuth } from "@/app/context/AuthProvider";
import React from "react";

const LoginButton = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-white text-black  hover:bg-black hover:text-white rounded-full text-sm sm:text-xl  border-2 px-2 py-1 sm:px-0 sm:py-0 text-md w-20 h-10  sm:w-28 sm:h-10"
    >
      Login
    </button>
  );
};

export default LoginButton;
