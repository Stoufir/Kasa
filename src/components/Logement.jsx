import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import logements from '../logement.json';
import Tags from './Tags';
import StarRate from './StarRate';
import DropDown from './DropDown';

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
}

function Logement() {
  const { id } = useParams();
  const logement = findLogementID(id);
  const pictures = logement.pictures;
  const [firstName, lastName] = logement.host.name.split(' ');
  const data = [
    { question: 'Description', answer: logement.description}, 
    { question: 'Équipements', answer: logement.equipments}
  ]
  return (
    <div>
        <Header />
            <div className='logement'>
                <img src={logement.pictures[0]} className='logement-img' alt={logement.pictures[0]?.title} />
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
                <DropDown data={data} />
                </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
