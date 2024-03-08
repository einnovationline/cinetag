import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "pages/inicio/inicio"
import Favorites from "pages/inicio/Favorites"
import Player from "components/Player"
import NotFound from "pages/NotFound"
import HomePage from "pages/HomePage"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favorites" element={<Favorites />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes