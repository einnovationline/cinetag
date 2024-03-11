import Banner from 'components/Banner'
import styles from './Player.module.css'
import TitleProject from 'components/TitleProject'
import { useParams } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import { useEffect, useState } from "react"

export default function Player(){
    const [video, setVideo] = useState()
    const parameters = useParams()//vai pegar o valor passado 
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/einnovationline/cinetag-api/videos?id=${parameters.id}`)//tava dado erro pois pus aspas simples em vez de crase
            .then(response => response.json())
            .then(date => {
                setVideo(...date)
            })
    }, [parameters.id])

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