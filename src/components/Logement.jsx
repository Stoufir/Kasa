import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../logement.json';
import Tags from './Tags';
import StarRate from './StarRate';
import Collapses from './Collapses';
import Slider from './Slider';

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
}
function Logement() {
  const { id } = useParams();
  const logement = findLogementID(id);

  if (!logement) {
    return <Navigate to="/404"/>
  }

  const pictures = logement.pictures;
  const [firstName, lastName] = logement.host.name.split(' ');
  const data = [
    { id: 1, question: 'Description', answer: logement.description}, 
    { id: 2, question: 'Équipements', answer: logement.equipments}
  ]
  return (
    <div>
            <div className='logement'>
                <Slider logement={logement}/>
                <div className='up-container'>
          <div className='title-container'>
            <div className='title'>{logement.title}</div>
            <div className='location'>{logement.location}</div>
          </div>
          <div className='host'>
            <div className='name-container'>
              <div>{firstName}</div>
              <div>{lastName}</div>
            </div>
            <img src={logement.host.picture} className='picture' alt={`Photo de ${logement.host.name}`} />
          </div>
                </div>
                <div className='mid-container'>
                <Tags tags={logement.tags} />
                <StarRate rating={parseInt(logement.rating)} />
                </div>
                <div className='bottom-container'>
                <Collapses data={data} />
                </div>
      </div>
    </div>
  );
}

export default Logement;
