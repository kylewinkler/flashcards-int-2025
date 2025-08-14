import type {ReactNode} from "react";
import Flashcards from "../pages/Flashcards/Flaschards.tsx";
import RegisterUser from "../pages/Auth/Register/Register.tsx";
import Login from "../pages/Auth/Login/Login.tsx";
import Logout from "../pages/Auth/Logout.tsx";
import CreateFlashcard from "../pages/Flashcards/CreateCard/CreateFlashcard.tsx";

interface RouteI {
    path: string;
    label?: string;
    component: ReactNode;
    protected?: boolean;
}
export const routes: RouteI[] = [
    {
      path: '/',
      label: "Flashcards",
      component: <Flashcards/>,
      protected: true
    },
    {
      path: '/flashcards/create',
      component: <CreateFlashcard />
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