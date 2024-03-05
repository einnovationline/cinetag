import styles from './TitleProject.module.css'

function TitleProject({children}){
    return (
        <div className={styles.TitleProject}>
            {children}
        </div>
    )
}

export default TitleProject