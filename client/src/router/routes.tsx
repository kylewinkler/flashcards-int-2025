import type {ReactNode} from "react";
import Flashcards from "../pages/Flashcards/Flaschards.tsx";
import Home from "../pages/Home/Home.tsx";
import RegisterUser from "../pages/Auth/Register/Register.tsx";
import Login from "../pages/Auth/Login/Login.tsx";
import Logout from "../pages/Auth/Logout.tsx";

interface RouteI {
    path: string;
    label?: string;
    component: ReactNode;
}
export const routes: RouteI[] = [
    {
      path: '/flashcards',
      label: "Flashcards",
      component: <Flashcards/>
    },
    {
      path: '/',
      label: "Home",
      component: <Home/>
    },
    {
      path: '/register',
      component: <RegisterUser />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/logout',
      component: <Logout />
    },
    {
      path: '*',
      component: <>404 not found</>
    }
]