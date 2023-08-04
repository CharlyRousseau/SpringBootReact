import { ColumnDef } from "@tanstack/react-table"
import {ArrowUpDown, Bookmark, PlusCircle} from "lucide-react"
import {Button} from "../components/ui/button.tsx";
import {TrashIcon} from "@radix-ui/react-icons";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../components/ui/alert-dialog"


export type Book = {
    id: number
    title: string
    author: string
    publisher: string
    description:string
    publishedDate: Date
    industryIdentifiers: string
    nbAvailable: number
    nbTotal:number
}


interface ColumnsProps {
    handleDelete: (bookId: string) => void;
    handleBorrow: (bookId: string) => void;

}
export function GetColumns({ handleDelete,handleBorrow}: ColumnsProps) {

    const column: ColumnDef<Book>[] = [
        {
            accessorKey: "id",
        },
        {
            accessorKey: "title",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Title
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
        },

        {
            accessorKey: "author",
            header: "Author",
        },
        {
            accessorKey: "description",
            header: "Description",
        },
        {
            accessorKey: "publishedDate",
            header: "PublishedDate",
        },
        {
            accessorKey: "industryIdentifiers",
            header: "IndustryIdentifiers",
        },
        {
            accessorKey: "nbAvailable",
            header: "Available",
            cell: ({row}) => {

                return (
                    <div>{row.getValue("nbAvailable")} / {row.getValue("nbTotal")}</div>
                )
            },
        },
        {
            accessorKey: "nbTotal",
        },
        {
            header: "Add copy",
            cell: () => {

                return (

                        <Button
                            variant="outline"
                            className="hidden h-8 w-8 p-0 lg:flex">
                            <PlusCircle className="h-4 w-4"/>
                        </Button>
                )
            },
        },
        {
            header: "Borrow ",
            cell: ({row}) => {
                if (row.getValue("nbAvailable") == 0){
                    return (
                        <>
                            <Button disabled={true} onClick={()=>{
                                handleBorrow(row.getValue("id") as string)
                            }}
                                    className="hidden h-8 w-8 p-0 lg:flex">
                                <Bookmark className="h-4 w-4"/>
                            </Button>
                        </>
                    );
                }
                return (
                    <>
                        <Button onClick={()=>{
                            handleBorrow(row.getValue("id") as string)
                        }}
                            className="hidden h-8 w-8 p-0 lg:flex">
                            <Bookmark className="h-4 w-4"/>
                        </Button>
                    </>


                )
            },
        },
        {
            header: "Delete ",
            cell: ({row}) => {

                return (
                    <>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button
                                variant="destructive"
                                className="hidden h-8 w-8 p-0 lg:flex">
                                <TrashIcon className="h-4 w-4"/>
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete the book from
                                    the database.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={function () {
                                    const bookid = row.getValue("id") as string
                                    handleDelete(bookid)

                                }}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    </>
                )
            },
        },

    ]
    return column
}
