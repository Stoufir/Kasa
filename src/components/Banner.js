import Logo from '../Assets/Logo_Kosa_Desktop.png'
import '../Styles/index.css'

function Banner() {
    return (
        <header className='Banner'>
            <img src={Logo} alt="Kasa Logo"></img>
            <nav className='navigation'>
                <button>Accueil</button>
                <button>A Propos</button>
                </nav>
        </header>
    )
}

export default Banner