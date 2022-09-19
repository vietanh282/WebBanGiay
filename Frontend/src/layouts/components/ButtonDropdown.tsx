/* eslint-disable jsx-a11y/anchor-is-valid */


type Props = {}


export const ButtonDropdown = (props: Props) => {

    return (
        <li className="relative mx-1 px-1 py-2 group  rounded-full mb-1 md:mb-0" id="button_admin">
            <svg className="h-9 lg:h-10 p-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" /></svg>

            <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                <svg className="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
                <li className="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                    {/* component */}
                    <div className="mx-auto right-0 mt-2 w-60">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="text-center p-6 bg-gray-800 border-b">
                                <svg aria-hidden="true" role="img" className="h-20 w-20 text-white rounded-full mx-auto" width={30} height={30} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z" /></svg>
                                <p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
                                <p className="text-sm text-gray-100">John@Doe.com</p>
                                <div className="mt-5">
                                    <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                                        Manage your Account
                                    </a>
                                </div>
                            </div>
                            <div className="border-b">
                                <a href="/admin/products" className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-green-600">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                            <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">
                                            Campaigns
                                        </p>
                                        <p className="text-xs text-gray-500">View your campaigns</p>
                                    </div>
                                </a>
                                <a href="/account/donations" className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-gray-800">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
                                        <p className="text-xs text-gray-500">View your last donations</p>
                                    </div>
                                </a>
                            </div>
                            <div className="">
                                <button className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
                                    <p className="text-sm font-medium text-gray-800 leading-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                            role="img" className="h-4 w-4 text-gray-800 fill-current animate-spin"
                                            width={32} height={32} preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                            <path fill="currentColor"
                                                d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z" />
                                        </svg>
                                        Logout
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </li>

    )
}

