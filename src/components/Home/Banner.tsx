import { home } from '../../assets/images'

const Banner = () => {
    return (
        <div className='tablet:max-h-[100vh] h-[180vw] w-full tablet:h-[50vw] relative top-0 left-0 right-0 bottom-0 z-[-3] overflow-hidden bg-gradient-to-b'>
            <img className='absolute tablet:right-[-2vw] tablet:bottom-[-10vw] bottom-0 z-[-1] w-full tablet:w-3/5 laptop-xl:w-[55%]' src={home} alt='Home Background' />
            <div className="tablet:h-full w-10/12 absolute top-[16vw] tablet:top-[10vw] left-1/2 transform -translate-x-1/2 flex flex-col tablet:items-start items-center z-[-2]">
                <h1 className='tablet:text-[7vw] text-[10vw] text-primary drop-shadow-custom'>CONSTRUCTO</h1>
                <p className='tablet:text-[1.2vw] relative top-[-1.4vw] mt-[0.2vw]'>CONSTRUCTION COMPANY</p>
                <p className='tablet:w-2/5 tablet:text-[1vw] text-[3vw] mt-[1vw] tablet:text-start text-center'>At UrbanNest, we bring visions to life through innovative design and superior craftsmanship. Our projects are more than just buildings, they are the foundations of thriving communities where dreams take root families thrive, and new lives begin. Discover how we blend tradition with modernitu to create spaces where peole truly live.</p>
                <div className='tablet:mt-[2.2vw] mt-[4vw] flex'>
                    <p className='text-white tablet:text-[1vw] text-[4vw] uppercase font-semibold tablet:px-[1.2vw] tablet:py-[0.6vw] px-[3vw] py-[1.6vw] bg-primary rounded-[0.6vw]'>Get Started</p>
                </div>
            </div>
        </div>
    )
}

export default Banner