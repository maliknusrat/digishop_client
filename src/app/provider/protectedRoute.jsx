"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const user =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  const isAuthenticated =
    user !== null && user !== undefined && user !== "null";

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated
    if (user === undefined) return; // Do nothing while still loading
    if (!user) {
      // If no user, redirect to the login page (or home page)
      router.push('/');
    } else {
      // If user is authenticated, stop loading
      setIsLoading(false);
    }
  }, [user, router]);

  // Show loading state while checking user
  if (isLoading) {
    return <div>Loading...</div>; // Or you can use a spinner or loading indicator
  }

  return children;
};

export default ProtectedRoute;