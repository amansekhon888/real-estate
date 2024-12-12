import Banner from '../components/Home/Banner'
import HomeServices from '../components/Home/HomeServices'

const Home = () => {
    return (
        <div className='flex flex-col gap-[6vw] tablet:text-[1vw] text-[3vw]'>
            <Banner />
            <HomeServices />
            <p></p>
        </div>
    )
}

export default Home