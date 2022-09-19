
type Props = {}

export const ButtonDropup = (props: Props) => {
    return (
        <span className="group-hover:text-gray-700">
            <div className="flex justify-center">
                <div className="dropup relative">
                    <button type="button" id="dropdownMenuButton1u" data-bs-toggle="dropdown" aria-expanded="false" >
                        Settings
                    </button>
                    <ul
                        className=" dropdown-menu min-w-max absolute   bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none "
                        aria-labelledby="dropdownMenuButton1u"
                    >
                        <li>
                            <a
                                className="group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                href="# trống"
                            >Action</a
                            >
                        </li>
                        <li>
                            <a
                                className="group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                href="# trống"
                            >Another action</a
                            >
                        </li>
                        <li>
                            <a
                                className="group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                href="# trống"
                            >Something else here</a
                            >
                        </li>
                    </ul>
                </div>

            </div>
        </span>
    )
}

