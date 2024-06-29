import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

function NotFound () {
    return (
        <div>
            <Header/>
            <div className='error-message'>
                <p className='error'>404</p>
                <p className='message'>Oups! La page que vous demandez n'existe pas</p>
             <NavLink to ="/home" className='home'>Retourner sur la page d'accueil</NavLink>
             </div>
           
            <Footer/>
        </div>
    )
}

export default NotFound;