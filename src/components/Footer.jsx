import Logo from '../assets/Logo_White_Kasa_Desktop.png'

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} className="logo" alt="Logo Kasa"></img>
            <p className='rights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer