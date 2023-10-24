"use client";

import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";

const SignOutButton = () => {
  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <Button
      onClick={handleLogOut}
      variant="destructive"
      className="w-full justify-start gap-3"
    >
      <LogOutIcon size={16} /> Sair
    </Button>
  );
};

export default SignOutButton;
