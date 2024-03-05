import { Link } from "react-router-dom"
import logo from './logo.png'   //={logo} abaixo, não é permitido importar do public por regra do react por ser uma pasta estática
import styles from './HeaderProject.module.css'    //={styles.HeaderProject} abaixo
import HeaderLink from "components/HeaderLink"

function HeaderProject(){
    return(
        <header className={styles.headerProject}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <HeaderLink url="./"/>
                    Home
                <HeaderLink url="./Favorites"/>
                    Favorites
            </nav>

        </header>
    )
}

export default HeaderProject;

//to é um componente de roteamento do React Router. Ele renderiza um link que, quando clicado, navegará para a rota especificada no atributo to. No caso, o link está configurado para navegar para a rota "./", que provavelmente é a raiz do aplicativo.
//<headerLink url="./"/><!-- aqui seria o atributo do {url}->
//Home<!-- aqui seria o atributo do {children}->
