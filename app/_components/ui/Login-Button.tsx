import { useAuth } from "@/app/context/AuthProvider";
import React from "react";

const LoginButton = () => {
    const {signInWithGoogle} = useAuth()
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-black text-white  hover:bg-white hover:text-black rounded-full  border-2 px-4 py-1 text-md"
    >
      Login
    </button>
  );
};

export default LoginButton;
