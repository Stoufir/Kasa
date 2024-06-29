import Img1 from '../Assets/Image2.png'

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