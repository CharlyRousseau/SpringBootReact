import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import {Button} from "../components/ui/button.tsx";


export type Borrower= {
    id: number
    firstName: string
    lastName: string
    email: string
    phone:string
}


export const columns: ColumnDef<Borrower>[] = [
    {
        accessorKey: "firstName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    First Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },

    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "email",
        header: "Mail",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },

]
