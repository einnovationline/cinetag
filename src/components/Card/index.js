import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'

export default function Card(props){
    return (
        <div className={styles['card-container']}>
            <img src={props.cover} alt={props.title} className={styles.cover} />
                <h2>{props.title}</h2>
                <img src={iconeFavoritar}
                    alt="Favoritar Filme"
                    className={styles.favoritar} />
        </div>
    )
}

//export default Card--> já faço o export na declaração da função