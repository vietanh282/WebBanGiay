import 'tw-elements'
import { IconCategories } from '../../components/Icons/IconCategory'
import { IconDashboard } from '../../components/Icons/IconDashboard'
import { IconProducts } from '../../components/Icons/IconProducts'
import { IconReport } from '../../components/Icons/IconReport'
import { IconSetting } from '../../components/Icons/IconSetting'
import { IconUsers } from '../../components/Icons/IconUsers'
import { IconWebsite } from '../../components/Icons/IconWebsite'
import { ButtonDropup } from './ButtonDropup'
import { LiComponent } from './LiComponent'
type Props = {}

export const NavBar = (props: Props) => {
    return (
        <div className="min-h-screen bg-gray-100 col-2">
            <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
                <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                    <div>
                        <div className="w-max p-2.5">
                            <img src="" className="w-32" alt="LOGO#" />
                        </div>
                        <ul className="mt-6 space-y-2 tracking-wide">
                            <LiComponent name="Dashboard" icon={<IconDashboard />} path="/admin"/>
                            <LiComponent name="Products" icon={<IconProducts />} path="products" />
                            <LiComponent name="Categories" icon={<IconCategories />} path="categories"/>
                            <LiComponent name="Reports" icon={<IconReport />} path="products"/>
                            <LiComponent name="User" icon={<IconUsers />} path="user"/>
                            <LiComponent name="Website" icon={<IconWebsite />} path="/"/>
                        </ul>
                    </div>
                    <div className="w-max -mb-3">
                        <p className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                            <IconSetting />
                            <span className="group-hover:text-gray-700"><ButtonDropup /></span>
                        </p>
                    </div >
                </div >

            </div >
        </div >
    )
}