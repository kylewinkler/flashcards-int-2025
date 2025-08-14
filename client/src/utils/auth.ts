export const extractTokenFromStorage = () => {
  const localStorageSession = localStorage.getItem('session');

  if (localStorageSession) return JSON.parse(localStorageSession).token;
  return null;
}