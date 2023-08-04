import { ColumnDef } from "@tanstack/react-table"
import {Book} from "../Book/columns.tsx";
import {Borrower} from "../Borrower/columns.tsx";

export type Copy= {
    id: number;
    book: Book;
    availability: boolean;
}

export type Borrow= {
    id: number;
    copy: Copy;
    borrowDate: string;
    returnDate: string;
    borrower: Borrower;
}


export const columns: ColumnDef<Borrow>[] = [
    {
        header: "Book ID",
        cell: ({row}) => {
            const borrow = row.original as Borrow;
            const copy = borrow.copy as Copy;
            const Book = copy.book as Book;
            return (
                <div>{Book.id}</div>
            )
        },
    },
    {
        accessorKey: "copy",
        header: "Title",
        cell: ({ row }) => {
            const borrow = row.original as Borrow;
            const copy = borrow.copy as Copy;
            const Book = copy.book as Book;
            return <span>{Book.title}</span>;
        },
    },
    {
        accessorKey: "borrowDate",
        header: "Borrow Date",
    },
    {
        accessorKey: "returnDate",
        header: "Return Date",
    },
    {
        accessorKey: "borrower",
        header: "Borrower",
        cell: ({ row }) => {
            const borrow = row.original as Borrow;
            const borrower = borrow.borrower as Borrower;
            return <span>{borrower.email}</span>;
        },
    },

]
