import { AppContext } from "@/context/appContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const useShortener = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("App context must be provided");
  }

  return context;
};

export const useCheckAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const userId = localStorage.getItem("userId");

    if (token && userId) {
      setIsAuthenticated(true);
    }
  }, [router]);

  return isAuthenticated;
};
