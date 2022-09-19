import React from 'react'
import { ButtonComponent } from '../../../components/button/button';
import { IconRoud } from '../../../components/Icons/IconRoud';
import { PathComponent } from '../../../components/Path/Path';
import { IProduct } from '../../../models/Products'
import { TDComponent } from '../components/td';
import { THComponent } from '../components/th';

type Props = {
    product: IProduct[];
}

const Producs = (props: Props) => {
    return (
        <div className="table w-full p-2">
            <div className="flex flex-nowrap p-3 m-2 bg-neutral-200">
                <PathComponent name1='Dashboard' name2='Products' />
            </div>
            <table className="w-full border">
                <thead>
                    <THComponent />
                </thead>
                <tbody>
                    {props.product.map((item, index) => {
                        return <>
                            <TDComponent id={index + 1}
                                name={item.name}
                                email={item.name}
                                image={item.image}
                                children={<>
                                    <ButtonComponent customStyle="bg-blue-500 text-white" >Edit</ButtonComponent>
                                    <ButtonComponent customStyle="bg-red-500 text-white " >Remove</ButtonComponent>
                                </>} />
                        </>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Producs