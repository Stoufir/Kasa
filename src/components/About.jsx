import Banner from './BannerAbout'
import Collapses from './Collapses'
import data from '../about.json'

function About () {
    return (<div>
        <Banner/>
        <div className='about'>
        <Collapses data={data}/>
        </div>
        </div>
    )
}


export default About