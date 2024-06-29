import Header from './Header'
import Footer from './Footer'
import{useParams} from "react-router-dom"
import logements from '../logement.json'

const findLogementID = (id)=> {
    return logements.find((logement)=> logement.id === id)
}

function Logement () {
    const {id}= useParams();
    const logement = findLogementID(id);
    const pictures = logement.pictures
    return (
        <div>
            <Header/>
            <div className='logement'>
                <img src={logement.pictures[0]} alt={logement.pictures[0]?.title} />         
                <p className='title'>{logement.title}</p>
                <p className='location'>{logement.location}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Logement