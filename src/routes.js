import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "pages/inicio/inicio"
import Favorites from "pages/inicio/Favorites"
import HeaderProject from "components/HeaderProject"
import FooterProject from "components/FooterProject"
import Container from "components/Container"

function AppRoutes() {
    return (
        <BrowserRouter>
            <HeaderProject />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                </Routes>
            </Container>
            <FooterProject />
        </BrowserRouter>
    )
}

export default AppRoutes