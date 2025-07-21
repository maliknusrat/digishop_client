"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isLoginPage = pathname === "/login";
  const isResPage = pathname === "/registartion";
  const isProductPage = pathname === "/productList";

  const user =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

 
    

  const isAuthenticated =
    user !== null && user !== undefined && user !== "null";

  console.log("Authenticated:", isAuthenticated);

  if (isHomePage) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }
  if (isLoginPage || isResPage) {
    return <>{children}</>;
  }

  if (!user) {
    if (isProductPage) {
      return (
        <div>
          <Navbar />
          <div className="flex-1 bg-slate-200 p-10 overflow-y-auto">
            {children}
          </div>
          <Footer />
        </div>
      );
    }
  }

  return (
    // <ProtectedRoute>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-slate-200 px-10 py-6 overflow-y-auto">
        {children}
      </div>
    </div>
    // </ProtectedRoute>
  );
}
