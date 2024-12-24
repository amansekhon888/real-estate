import { logo } from '../../assets/images'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-10/12 flex justify-between py-[1vw] m-auto items-center max-tablet:hidden'>
        <img className='w-[8vw]' src={logo} alt='logo' />
        <div className='flex gap-[2vw] text-[0.8vw] font-sans font-semibold'>
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">GALLARY</Link>
            <Link to="/">SERVICES</Link>
            <Link to="/">PROJECTS</Link>
            <Link to="/">TEAMS</Link>
            <Link to="/">CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar