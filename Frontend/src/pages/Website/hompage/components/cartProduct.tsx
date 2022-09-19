import React from 'react'

interface Props{
    image?:string;
    name?: string;
    email?:string
}

export const CartProduct:React.FC<Props> = (props) => {
    const {image,name,email} = props 
    return (
        <div>
            <div className="p-10">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="desc">
                    <h2 className='flex flex-row' >{name}</h2>
                    <p className='flex flex-row'>{email}</p>
                </div>
            </div>
        </div>
    )
}
