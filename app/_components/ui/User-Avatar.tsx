import { useAuth } from "@/app/context/AuthProvider";
import Image from "next/image";
import React from "react";

const UserAvatar = ({ classname }: { classname: string }) => {
  const { user } = useAuth();
  if (!user) return;
  return (
    <Image
      className={`${classname} + bg-blue-300  border-2 rounded-full`}
      src={user.photoURL || "public/assets/user.avif"}
      alt={user.displayName || "avatar"}
      height={40}
      width={40}
    />
  );
};

export default UserAvatar;
