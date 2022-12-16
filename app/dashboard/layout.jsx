"use client";
import { useAuth } from "#/supabase/auth";
import LoginPage from "../login/page";

const DashboardLayout = ({ children }) => {
  const { user } = useAuth();
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!user ? <LoginPage /> : children}
    </div>
  );
};

export default DashboardLayout;
