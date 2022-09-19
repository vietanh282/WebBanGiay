
interface ButtonProps {
    id?: number;
    name?: string;
    email?: string;
    image?: string;
    children?: any;
}


export const TDComponent = (props: ButtonProps) => {
    const { id, children, name, email, image } = props
    return (
            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">{id} </td>
                <td className="p-2 border-r">{name}</td>
                <td className="p-2 border-r">{email}</td>
                <td className="p-2 border-r "><img className=' w-20 h-20 ' src={image} alt="" /></td>
                <td>
                    {children}
                </td>
            </tr>
    )
}
