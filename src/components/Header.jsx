import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo_Kasa_Desktop.png'



function Header() {
    return (
        <header className='header'>
            <NavLink to ="/"><img src={Logo} alt="Logo Kasa" ></img></NavLink>
            <nav className='navigation'>
                <ul>
                <NavLink to ="/" className={({isActive}) => (isActive ? "underline" : "")} >
                <li>Accueil</li>
                </NavLink>
                <NavLink to ="/about" className={({isActive}) => (isActive ? "underline" : "")}>
                <li>A Propos</li>
                </NavLink>
                </ul>
                </nav>
        </header>
    )
}

export default Header

