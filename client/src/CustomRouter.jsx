import { useRoutes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import NotFound from "./components/NotFound";
import IndividualMovies from "./pages/IndividualMovies";

const CustomRouter = () => {
    const customRoutes = useRoutes([
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/movies/:id',
            element: <IndividualMovies />
        },
        {
            path: '*',
            element: <NotFound /> 
        }
    ])

    return customRoutes;
}

export default CustomRouter;

