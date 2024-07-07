import Img1 from '../Assets/Mountain_picture.png'

function Banner() {
    return (
            <div className="banner">
                <img src={Img1} alt="Kasa Logo"></img>
                <div className="overlay">
                </div>
            </div>
    )
}

export default Banner