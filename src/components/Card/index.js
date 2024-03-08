import { useFavoriteContext } from 'components/Context/Favorites'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

export default function Card(props){
    const { favorite, addFavorite } = useFavoriteContext()
    const { id, title, cover } = props; // Definindo as variáveis id, title e cover
    const ehFavorite = favorite.some((fav) => fav.id === id)
    const icone = !ehFavorite ? iconeFavoritar : iconeDesfavoritar

    return (
        <div className={styles['card-container']}>
            <img src={props.cover} alt={props.title} className={styles.cover} />
                <h2>{props.title}</h2>
                <img src={icone}
                    alt="Favoritar Filme"
                    className={styles.favoritar} 
                    onClick={() => {
                      addFavorite({ id, title, cover })  
                    }} />
        </div>
    )
}

//export default Card--> já faço o export na declaração da função