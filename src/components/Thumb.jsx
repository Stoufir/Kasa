import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function Thumb ({Logements}) {
    return ( 
        Logements.map((logement) =>(
        <Link to={`/Logement/${logement.id}`} className="thumb" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
        </Link>
        ))
    )    
} 

Thumb.propTypes = {
        Logements: PropTypes.array.isRequired
    }

export default Thumb

