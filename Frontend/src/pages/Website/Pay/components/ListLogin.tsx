import React, { useState } from 'react'

type Props = {}

const ListLogin = (props: Props) => {
    const [test, setTest] = useState<boolean>(
        false
    );
    const login = () => {
        return (
            <>
            <div className="cursor-pointer group ">

                <p>Nếu trước đây bạn đã mua hàng của chúng tôi, vui lòng điền đầy đủ thông tin đăng nhập dưới đây. Nếu bạn là khách hàng mới, vui lòng tiếp tục các bước tiếp theo.</p>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="font-semibold text-sm uppercase">Tên đăng nhập hoặc email *</label>
                        <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="font-semibold text-sm uppercase">Mật khẩu *</label>
                        <input type="text" id="last_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                </div>
                <div className="flex items-start mb-6">
                <button className="bg-red-700 font-semibold hover:bg-red-800 py-3 text-sm text-white uppercase p-4 ">Đặt Hàng</button>
                    <div className="flex items-center h-5  mt-3 ">
                        <input id="remember" type="checkbox" className="w-4 h-4 ml-11 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        <label htmlFor="remember" className="font-semibold text-sm uppercase ml-2">Ghi nhớ mật khẩu</label>
                    </div>
                </div>
                <a href="">Quên mật khẩu?</a>
               
            </div>
             <hr  className=' pt-5'/>
             </>

        )
    }
    const handldClick = (e: any) => {
        setTest(!test)
    }

    return (
        <div className=' pl-10'>
            <label className="inline-flex items-center">
                <button name='login' onClick={handldClick} >Bạn đã có tài khoản? Ấn vào đây để đăng nhập</button>
            </label>
            {test && login()}
        </div>
    )
}

export default ListLogin