import { AppContext } from "@/context/appContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import instance, { privateInstance } from "../../axio.config";
import { useAuth } from "@/context/providers/AuthProvider";

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
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_API_URL}/urls/${textToCopy}`
      );
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
  const { data } = await instance.get("/csrf");
  return data;
};

export const useGetCsrufToken = () => {
  const { data } = useQuery({
    queryKey: ["csrf"],
    queryFn: fetchToken,
  });

  return {
    csrfToken: data,
  };
};

export const useRefreshToken = () => {
  
  const { setAuth } = useAuth();

  const refresh = async () => {
    const { data } = await instance.get("/users/auth/refresh-token", {
      withCredentials: true,
    });

    setAuth((prev) => {
      return {
        user: prev ? prev.user : null,
        token: data.data.accessToken,
      };
    });

    return data.data.accessToken;
  };

  return refresh;
};

export const usePrivateAxios = () => {

  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const { csrfToken } = useGetCsrufToken();
  const router = useRouter()

  useEffect(() => {
    const requestIntercept = privateInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
          config.headers["x-csrf-token"] = csrfToken.csrfToken;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = privateInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if(error?.response?.status === 401&&error?.response?.data?.message==="No refresh token provided"){
          router.push("/login")
        }

        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();

          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          prevRequest.headers["x-csrf-token"] = csrfToken.csrfToken;

          return privateInstance(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      privateInstance.interceptors.request.eject(requestIntercept);
      privateInstance.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh, csrfToken,router]);

  return privateInstance;
};
