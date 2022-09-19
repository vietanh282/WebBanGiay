import { Link } from "react-router-dom"

interface ButtonProps {
    icon?: any;
    name?: string;
    path?:any;
}

export const LiComponent = (props: ButtonProps) => {
    const { icon, name ,path} = props
    return (
        <li className="min-w-max">
            <Link  to={`${path}`} className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                {icon}
                <span className="group-hover:text-gray-700"> {name}</span>
            </Link>
        </li>
    )
}