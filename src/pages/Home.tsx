import Contact from '../components/Contact/Contact'
import Banner from '../components/Home/Banner'
import Figures from '../components/Home/Figures'
import HomeAbout from '../components/Home/HomeAbout'
import HomeExplore from '../components/Home/HomeExplore'
import HomeServices from '../components/Home/HomeServices'
import HomeWork from '../components/Home/HomeWork'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
    return (
        <div className='flex flex-col gap-[6vw]'>
            <Banner />
            <HomeExplore />
            <HomeServices />
            <HomeAbout />
            <Figures />
            <HomeWork />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Home