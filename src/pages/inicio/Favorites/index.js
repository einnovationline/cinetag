import Banner from 'components/Banner';
import React from './Favorites.module.css';
import TitleProject from 'components/TitleProject';
import Card from 'components/Card';
import { useFavoriteContext } from 'components/Context/Favorites';

export default function Favorites(){
    const { favorites } = useFavoriteContext()
    return(
        <>
            <Banner imagem='favorites' />
            <TitleProject>
                <h1>Meus favoritos</h1>
            </TitleProject>
            <section>
                {favorites && favorites.length > 0 ? (
                    favorites.map((fav)=> {
                        return <Card {...fav} key={fav.id} />
                    })
                ) : (
                    <p>Nenhum favorito encontrado.</p>
                )}
            </section>
        </>
    )

}