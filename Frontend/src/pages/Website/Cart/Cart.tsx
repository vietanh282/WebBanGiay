import React, { useState } from 'react'
import { ButtonComponent } from '../../../components/button/button';
import { CardComponents } from './components/Card';

type Props = {}

const Cart = (props: Props) => {
    const [test, setTest] = useState<boolean>(
        false
    );

    const renderAdress = () => {
        return (
            <section className="">
                <p className="form-row form-row-wide pl-1.5 " id="calc_shipping_country_field">
                    <select name="calc_shipping_country" id="calc_shipping_country" className="w-52 py-2 border-2 border-gray-500" >
                        <option value="">Chọn quốc gia…</option>
                        <option value="AF">Afghanistan</option>
                        <option value="EG">Ai Cập</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="GB">Anh (UK)</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua và Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="PW">Belau</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">Bonaire, Saint Eustatius và Saba</option>
                        <option value="BA">Bosnia và Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BR">Brazil</option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                    </select>
                </p>
                <p className="form-row form-row-wide p-2" id="">
                    <input type="text" className="border-2 border-gray-500  py-1 " placeholder="Thành phố" />
                </p>
                <p className="form-row form-row-wide p-2" id="">
                    <input type="text" className="border-2 border-gray-500  py-1" placeholder="Mã bưu điện" />
                </p>
                <p className='p-2'>
                    <ButtonComponent type='submit' customStyle="bg-red-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" >Cập nhật</ButtonComponent>
                </p>
                <input type="hidden" id="woocommerce-shipping-calculator-nonce" name="woocommerce-shipping-calculator-nonce" defaultValue="6edcf45753" /><input type="hidden" name="_wp_http_referer" defaultValue="/converse/gio-hang/" />
            </section>
        )
    }
    const handldClick = (e: any) => {
        setTest(!test)
    }
    const data = [
        {
            "name": "string 1",
            "price": "string 1",
            "amount": " 1",
            "total": "string 1",
            "id": "string 1",
            "categories": "string 1",
            "img": "https://img3.thuthuatphanmem.vn/uploads/2019/07/05/hinh-anh-3d-doc-dao_083003924.jpg"
        },
        {
            "name": "string 12",
            "price": "400",
            "amount": " 400",
            "total": "400",
            "id": "1",
            "categories": "string 12",
            "img": "https://img3.thuthuatphanmem.vn/uploads/2019/07/05/hinh-anh-3d-doc-dao_083003924.jpg"
        }
    ]
    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Giỏ Hàng</h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Sản Phẩm</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Số Lượng </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Giá</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Tổng</h3>
                    </div>
                    {data.map((row, index) => (
                        <CardComponents key={index} name={row.name} price={row.price} amount={row.amount} total={row.total} img={row.img} />
                    ))}

                    <a href="" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Tiếp Tục Xem Sản Phẩm
                    </a>
                </div>
                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Thanh Toán</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Số lượng sản phẩm (3)</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div className=''>
                        <div className="flex flex-row">
                            <span className="basis-1/2  font-semibold text-sm uppercase   ">Giao Hàng</span>
                            <button onClick={handldClick}>Địa chỉ giao hàng</button>
                        </div>
                        <div className="my-5 bg-gray-100">
                            <form className='p-5' action="" method="post">
                                {test && renderAdress()}
                            </form>
                        </div>
                    </div>
                    <div className="pb-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Mã khuyến mãi</label>
                        <input type="text" id="promo" placeholder="Nhập mã khuyến mãi" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Sử dụng</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Tổng</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart