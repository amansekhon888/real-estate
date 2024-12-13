import Navbar from '../components/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Common/Sidebar'

const Layout = () => {
  return (
    <div className='font-sans text-para'>
        <Navbar />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Layout