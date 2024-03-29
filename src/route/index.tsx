import ItemPage from "../pages/ItemPage";
import MainPage from "../pages/MainPage";

export const routes: Array<makeRoutes> = [
    { id: "MainPage", path: "/", element: <MainPage /> },
    { id: "MainPage", path: `/posts/*`, element: <ItemPage /> },
]