import { AppContext } from "@/context/appContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import instance from "../../axio.config";

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

export const useClipboard = (textToCopy: string) => {

  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_API_URL}/urls/${textToCopy}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return {
    copied,
    copyText,
  };
};


const fetchToken = async () => {
  const {data} = await instance.get("/csrf");
  return data;
};

export const useGetCsrufToken = ()=>{

  const {data} = useQuery({
      queryKey: ["csrf"],
      queryFn: fetchToken,
    });

    
    return {
      csrfToken:data
    }

}