import { useAuth } from "@/app/context/AuthProvider";
import React from "react";

const LoginButton = () => {
    const {signInWithGoogle} = useAuth()
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-black text-white  hover:bg-white hover:text-black rounded-md font-bold border-2 px-5 py-2 text-lg"
    >
      Login
    </button>
  );
};

export default LoginButton;
