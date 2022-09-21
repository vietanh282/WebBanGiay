import { Outlet } from 'react-router-dom'
import Header from '../pages/Website/header/header'

type Props = {}

const WebLayout = (props: Props) => {
  return (
    <><header>
      <Header />
    </header>
      <div>
        <main>
          <Outlet />
        </main>
      </div></>
  )
}

export default WebLayout