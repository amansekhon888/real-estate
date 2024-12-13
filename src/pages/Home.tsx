import Banner from '../components/Home/Banner'
import HomeAbout from '../components/Home/HomeAbout'
import HomeServices from '../components/Home/HomeServices'
import HomeWork from '../components/Home/HomeWork'

const Home = () => {
    return (
        <div className='flex flex-col gap-[6vw] '>
            <Banner />
            <HomeServices />
            <HomeAbout />
            <HomeWork />
            <p></p>
        </div>
    )
}

export default Home