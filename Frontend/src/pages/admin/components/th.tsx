import { IconRoud } from "../../../components/Icons/IconRoud";


const data = [
    { name: 'ID' },
    { name: 'Name' },
    { name: "Email" },
    { name: "Image" },
    { name: "Action" },
]


export const THComponent = (props: any) => {

    return (
        <tr>
            {data.map((row) => (
                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                        {row.name}
                        <IconRoud />
                    </div>
                </th>
            ))}
        </tr>
    )
}
