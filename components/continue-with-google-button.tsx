"use client";

import {useAuth} from "@/context/auth";
import {Button} from "./ui/button";

export default function ContinueWithGoogleButton() {
  const auth = useAuth();

  return (
    <Button onClick={() => auth?.logInWithGoogle()} className="w-full">
      Continue with Google
    </Button>
  );
}
