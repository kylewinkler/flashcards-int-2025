import { createContext, type ReactNode, useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export interface UserI {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
}

interface AuthContextI {
    user: UserI | null;
    login: ( token: string ) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextI | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode}) => {
    const [user, setUser] = useState<UserI | null>(null);
    const navigate = useNavigate();

function isValidJWT(token: string): boolean {
  return token.split('.').length === 3;
}

const login = (token: string) => {
  console.log(token)
    if (!isValidJWT(token)) throw new Error("Invalid token format");
    localStorage.setItem('session', token);
    const decodedToken = jwtDecode<UserI>(token);
    setUser(decodedToken);
}

    const logout = () => {
        localStorage.removeItem('session');
        setUser(null);
        navigate('/login', {
            replace: true
        })
    }

    useEffect(() => {
      const token: string | null = localStorage.getItem('session');
      if (token) {
          try {
              login(token);
          } catch (error) {
              console.error("Invalid token in localStorage:", error);
              localStorage.removeItem('session');
              setUser(null);
          }
      }
  }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useUserContext must be used within a UserContextProvider');
  return context;
};