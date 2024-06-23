import Img1 from '../Assets/Image1.png'

function TopImage() {
    return (
        <main>
            <div className="top-image">
        <img src={Img1} alt="Kasa Logo"></img>
        <p>Chez vous, partout et ailleurs</p>
        </div>
        </main>
    )
}

export default TopImage