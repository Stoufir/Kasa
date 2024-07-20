import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import Logements from '../logement.json'
import Beachpicture from '../assets/Beach_picture.png'

function Home () {
return (
   <main>
            <Banner imgSrc={Beachpicture} text="Chez vous, partout et ailleurs" />
            <div className='gallery'>
            <Thumb Logements={Logements}/>
            </div>
        </main>
   
)
}


export default Home