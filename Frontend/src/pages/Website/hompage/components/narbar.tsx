import React from 'react'

interface Props {
    image?: string;
    name?: string;
    email?: string
}

export const NavBar: React.FC<Props> = (props) => {
    return (
        <div className='grid grid-cols-2 mx-10'>
            <div>
                <h1 className='flex flex-row'>Store</h1>
            </div>
            <div className="flex flex-row-reverse">
                <svg className="h-8 w-8 text-black mx-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="9" y1="6" x2="20" y2="6" />  <line x1="9" y1="12" x2="20" y2="12" />  <line x1="9" y1="18" x2="20" y2="18" />  <line x1="5" y1="6" x2="5" y2="6.01" />  <line x1="5" y1="12" x2="5" y2="12.01" />  <line x1="5" y1="18" x2="5" y2="18.01" /></svg>
                <svg className="h-8 w-8 text-black mx-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
        </div>
    )
}
