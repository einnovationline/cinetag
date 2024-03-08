import styles from './Banner.module.css'

export default function Banner({ imagem }){
    return (
        <div className={styles.cover} style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }} />
    )
}

//export default Banner