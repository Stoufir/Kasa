import { NavLink } from 'react-router-dom'
import Logo from '../Assets/Logo_Kosa_Desktop.png'



function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="Logo Kasa"></img>
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

