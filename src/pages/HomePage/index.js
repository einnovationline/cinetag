import Container from "components/Container"
import FavoritesProvider from "components/Context/Favorites"
import FooterProject from "components/FooterProject"
import HeaderProject from "components/HeaderProject"
import { Outlet } from "react-router-dom"

export default function HomePage() {
    return (
        <main>
            <HeaderProject />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <FooterProject />
        </main>
    )
}