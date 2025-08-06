import type {ReactNode} from "react";
import Flashcards from "../pages/Flashcards/Flaschards.tsx";
import Home from "../pages/Home/Home.tsx";

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
      path: '*',
      component: <>404 not found</>
    }
]