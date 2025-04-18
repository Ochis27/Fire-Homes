"use client";

import {useAuth} from "@/context/auth";
import {Link} from "lucide-react";

export default function AuthButtons() {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>{auth.currentUser.email}</div>
          <div>Logout</div>
        </>
      )}
      {!auth?.currentUser && (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Sign up</Link>
        </>
      )}
    </div>
  );
}
