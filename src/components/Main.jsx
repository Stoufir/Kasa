import Banner from './Banner1'
import Thumb from './Thumb'
import Logements from '../logement.json'

function Main () {
    return (
        <main>
            <Banner/>
            <div className='gallery'>
            <Thumb Logements={Logements}/>
            </div>
        </main>
    )
}

export default Main