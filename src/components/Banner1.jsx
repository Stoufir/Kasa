import Img1 from '../Assets/Image1.png'

function Banner() {
    return (
            <div className="banner">
                <img src={Img1} alt="Kasa Logo"></img>
                <div className="overlay">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
    )
}

export default Banner
