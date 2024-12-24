import Navbar from '../components/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Common/Sidebar'
import Footer from '../components/Common/Footer'

const Layout = () => {
  return (
    <div className='font-sans text-para flex flex-col gap-[6vw]'>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout