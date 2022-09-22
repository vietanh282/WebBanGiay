import React, { useState } from 'react'

type Props = {}

const ListPromoCode = (props: Props) => {
    const [test, setTest] = useState<boolean>(
        false
    );
    const login = () => {
        return (
            
            <div className="cursor-pointer group border-dashed border-2 border-red-600 ">
                <p className='ml-10 my-2' >Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.</p>
                <div className="grid gap-100 mb-6 lg:grid-cols-2 ml-10">
                    <input type="text" id="first_name" className="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mã ưu đãi" required />
                    <button className="bg-red-600 w-1/4 hover:bg-red-700 text-white font-semibold  px-5">
                    Áp Dụng
                    </button>
                </div>
            </div>

        )
    }
    const handldClick = (e: any) => {
        setTest(!test)
    }

    return (
        <div className=' pl-10'>
            <label className="inline-flex items-center">
                <button name='login' onClick={handldClick} >Bạn có mã ưu đãi? Ấn vào đây để nhập mã</button>
            </label>
            {test && login()}
        </div>
    )
}

export default ListPromoCode