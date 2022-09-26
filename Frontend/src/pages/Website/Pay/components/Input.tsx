import clsx from 'clsx';

interface InputProps {
    handleClick?: () => void;
    type: "text" | "number" | "submit" | "email" | "password";
    children: any;
    customStyle?: string;
    id?: string;
    placeholder?: string
}


export const InputComponent = (props: InputProps) => {
    const { children, handleClick, customStyle,placeholder, type, id } = props
    return (
        <>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{children}</label>
            <input type={type} id={id}
             className={clsx(['bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', customStyle])}
             placeholder={placeholder} 
             onClick={handleClick}
             required />
        </>
    )
}