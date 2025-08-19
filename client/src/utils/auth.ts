import { jwtDecode } from "jwt-decode";

export const extractTokenFromStorage = () => {
  const localStorageSession = localStorage.getItem('session');

  if (localStorageSession) return JSON.parse(localStorageSession).token;
  return null;
}

export const isTokenExpired = (token: string) => {
  const exp = jwtDecode(token).exp;
  const now = Math.floor(Date.now() / 1000); 
  
  return exp! < now;
}