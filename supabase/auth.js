"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ supabase, ...props }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, currentSession) => {
      console.log("auth change");
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
    }
  );

  useEffect(() => {
    console.log("mount");
    const activeSession = supabase.auth.getSession();
    setSession(activeSession);
    setUser(activeSession?.user ?? null);

    return () => {
      authListener?.subsciption?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signOut: () => supabase.auth.signOut(),
      }}
      {...props}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
