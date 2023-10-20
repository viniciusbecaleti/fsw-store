"use client";

import { signIn } from "next-auth/react";
import { LogInIcon } from "lucide-react";
import { Button } from "./ui/button";

const AutenticationButton = () => {
  const handleLogin = async () => {
    await signIn();
  };

  return (
    <Button
      onClick={handleLogin}
      variant="outline"
      className="w-full justify-start gap-3"
    >
      <LogInIcon size={16} /> Fazer Login
    </Button>
  );
};

export default AutenticationButton;
