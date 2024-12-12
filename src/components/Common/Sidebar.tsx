import { useState } from 'react';
import { logo } from '../../assets/images'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="tablet:hidden">
            <div className=' absolute top-0 left-1/2 transform -translate-x-1/2 w-11/12 flex justify-between py-[2vw] m-auto items-center'>
                <img className='w-[32vw]' src={logo} alt='logo' />
                {isOpen===true ? (
                    <HiOutlineX className='text-[6vw]' onClick={() => setIsOpen(false)} />
                ) : <HiOutlineMenuAlt1 className='text-[6vw]' onClick={() => setIsOpen(true)} /> }
            </div>
            {isOpen && (
                <div className='absolute top-[14vw] right-0 flex flex-col justify-self-end bg-white w-[46%] gap-[1.6vw] py-[2.6vw] px-[4vw] mx-[3vw] rounded-[1.2vw]'>
                    <Link className='mt-[1vw]' to="/">HOME</Link>
                    <hr/>
                    <Link className='mt-[1vw]' to="/">ABOUT</Link>
                    <hr/>
                    <Link className='mt-[1vw]' to="/">GALLARY</Link>
                    <hr/>
                    <Link className='mt-[1vw]' to="/">SERVICES</Link>
                    <hr/>
                    <Link className='mt-[1vw]' to="/">PROJECTS</Link>
                    <hr/>
                    <Link className='mt-[1vw]' to="/">TEAMS</Link>
                    <hr/>
                    <Link className='my-[1vw]' to="/">CONTACT</Link>
                </div>
            )}
        </div>
    )
}

export default Sidebar