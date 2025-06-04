import { User } from "@/lib/interfaces";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  auth:{user:User|null,token:string}|null,
  setAuth:React.Dispatch<React.SetStateAction<{user:User|null,token:string}|null>>;

}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  auth:null,
  setAuth:()=>{}
});
