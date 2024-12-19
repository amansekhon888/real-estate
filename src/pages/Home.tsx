import Banner from '../components/Home/Banner'
import Figures from '../components/Home/Figures'
import HomeAbout from '../components/Home/HomeAbout'
import HomeExplore from '../components/Home/HomeExplore'
import HomeServices from '../components/Home/HomeServices'
import HomeWork from '../components/Home/HomeWork'

const Home = () => {
    return (
        <div className='flex flex-col gap-[6vw]'>
            <Banner />
            <HomeServices />
            <HomeAbout />
            <HomeWork />
            <Figures />
            <HomeExplore />
            <p>HELLO</p>
        </div>
    )
}

export default Home