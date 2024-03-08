import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "pages/inicio/inicio"
import Favorites from "pages/inicio/Favorites"
import HeaderProject from "components/HeaderProject"
import FooterProject from "components/FooterProject"
import Container from "components/Container"
import FavoritesProvider from "components/Context/Favorites"

function AppRoutes() {
    return (
        <BrowserRouter>
            <HeaderProject />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favorites" element={<Favorites />}></Route>
                    </Routes>
                </FavoritesProvider>
            </Container>
            <FooterProject />
        </BrowserRouter>
    )
}

export default AppRoutes