"use client";

import {auth} from "@/firebase/client";
import {GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";

type AuthContextType = {
  currentUser: User | null;
  logout: () => Promise<void>;
  logInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ?? null);
    });

    return () => unsubcribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
  };

  const logInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{currentUser, logout, logInWithGoogle}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
