import { bedroom2, kitchen1, living_room1, office1, sitting_area2 } from '../../assets/images'
import Heading from '../Common/Heading'

const HomeAbout = () => {
  return (
    <div className='tablet:w-10/12 w-11/12 max-h-[90vh] m-auto grid grid-cols-4 grid-rows-7 gap-[1.2vw]'>
        <img className='rounded-[1.6vw] row-span-3 h-full w-full object-cover' src={kitchen1} alt='About Kitchen Image' />
        <img className='rounded-[1.6vw] row-start-4 row-end-8 h-full w-full object-cover' src={living_room1} alt='About Living Room Image' />
        <img className='rounded-[1.6vw] col-start-2 row-start-2 row-end-6 h-full w-full object-cover' src={bedroom2} alt='About Bedroom Image' />
        <div className='row-start-1 row-end-3 col-start-3 col-end-5 self-end'>
            <Heading text='Building a Legacy of Excellence' />
        </div>
        <div className='mt-[1.6vw] row-start-3 row-end-5 col-start-3 col-end-5 text-end'>
            <p>At URBANNEST Construction Company, we create more than just buildings—we craft spaces where dreams take shape and communities grow.</p>
            <p className='mt-[1vw]'>From stunning residential homes to modern commercial spaces, our team combines expertise with a client-first approach to bring every vision to life. At URBANNEST, we’re not just building structures—we’re building a legacy.</p>
        </div>
        <img className='rounded-[1.6vw] col-start-2 row-start-6 row-end-8 h-full w-full object-cover' src={office1} />
        <img className='rounded-[1.6vw] col-start-3 col-end-5 row-start-5 row-end-8 h-full w-full object-cover object-bottom' src={sitting_area2} />
    </div>
  )
}

export default HomeAbout