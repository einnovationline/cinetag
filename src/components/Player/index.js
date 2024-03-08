import Banner from 'components/Banner'
import styles from './Player.module.css'
import TitleProject from 'components/TitleProject'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json'
import NotFound from 'pages/NotFound'

export default function Player(){
    const parameters = useParams()//vai pegar o valor passado 
    const video = videos.find((video) => {
        return video.id === Number(parameters.id)
    })

    if(!video) {
        return <NotFound />
    }

    return(
        <>
            <Banner imagem="player" />
            <TitleProject>
            <section className={styles.container}>
                <iframe 
                    width="560" 
                    height="315" 
                    src={video.link} 
                    title={video.title} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                </section>
                </TitleProject>
        </>
    )

}