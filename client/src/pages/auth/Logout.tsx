import { useAuthContext } from "../../context/auth.context";

const Logout = () => {
  const { logout } = useAuthContext();

  logout();

  return null;
}

export default Logout;