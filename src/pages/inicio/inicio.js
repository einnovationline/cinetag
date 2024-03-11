import Banner from "components/Banner"
import TitleProject from "components/TitleProject"
import Card from "components/Card"
import styles from './Inicio.module.css'
import { useEffect, useState } from "react"

export default function Inicio(){
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/einnovationline/cinetag-api/videos`)
            .then(response => response.json())
            .then(date => {
                setVideos(date)
            })
    }, [])

    return(
        <>
            <Banner imagem="home" />
            <TitleProject>
                <h1>Para guardar os filmes!</h1>
            </TitleProject>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>    
        </>//usado essa tag vazia é um fragmento, para não dar erro quando colocar os components
        )
}