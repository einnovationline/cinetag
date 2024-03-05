import Banner from "components/Banner"
import TitleProject from "components/TitleProject"
import Card from "components/Card"
import videos from 'json/db.json'
import styles from './Inicio.module.css'

export default function Inicio(){
    return(
        <>
            <Banner imagem="home" />
            <TitleProject>
                <h1>Para guardar os filmes!</h1>
            </TitleProject>
            <section className={styles.container}>
                {console.log(videos)} 
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>    
        </>//usado essa tag vazia é um fragmento, para não dar erro quando colocar os components
        )
}