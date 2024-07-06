import Banner from './Banner2'
import DropDown from './Collapsed'

const data = [
    { 
        id: 1,
        question: 'Fiabilité',
        answer: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.'

    },
    { 
        id: 2,
        question: 'Respect',
        answer: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturabation du voisinage entraînera une exclusion de notre plateforme.'

    },
    { 
        id: 3,
        question: 'Service',
        answer: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturabation du voisinage entraînera une exclusion de notre plateforme'

    },
    { 
        id: 4,
        question: 'Sécurité',
        answer: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité dommestique pour nos hôtes.`

    }
]


function About () {
    return (<div>
        <Banner/>
        <div className='about'>
        <DropDown data={data}/>
        </div>
        </div>
    )
}


export default About