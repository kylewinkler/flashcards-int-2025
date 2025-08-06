import {Route, Routes} from "react-router-dom";
import {routes} from "./routes.tsx";

const Router= () => {
    return (
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component}/>
                ))}
            </Routes>
    )
}

export default Router;