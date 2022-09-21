import { Outlet } from 'react-router-dom'
import { HeaderAdmin } from './components/headerAdmin'
import { NavBar } from './components/navbar'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <div className='row relative ' >
        <div className="col-2 fixed top-0 z-50 ">
          <NavBar />
        </div>
        <div className="col-10 ml-14">
          <HeaderAdmin />
          <div className="pt-16">
          <Outlet />

          </div>
        </div>
      </div>
    </div>

  )
}

export default AdminLayout