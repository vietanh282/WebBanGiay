/* eslint-disable jsx-a11y/anchor-is-valid */
import { ButtonDropdown } from './ButtonDropdown'

type Props = {}

export const HeaderAdmin = (props: Props) => {
    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-20  ">
            <div className="container mx-auto px-4 py-2 flex items-center ">
                {/* phone number */}
                <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
                    <span className="font-bold md:text-xl">8 800 332 65-66</span>
                    <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
                </div>
                {/* buttons */}
                <nav className="contents">
                    <ul className="ml-4 xl:w-48 flex items-center justify-end">
                        <li className="ml-2 lg:ml-4 relative inline-block">
                            <ButtonDropdown />

                        </li>
                        <li className="ml-2 lg:ml-4 relative inline-block">
                            <a className='/admin' href=''>
                                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">{/* số lượng thông báo chưa xem */}</div>
                                <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </a>
                        </li>
                        <li className="ml-2 lg:ml-4 relative inline-block ">
                            <a className="" href=''>
                                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">{/* số lượng tin nhắn chờ */}</div>
                                <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr />
        </header>
    )
}

