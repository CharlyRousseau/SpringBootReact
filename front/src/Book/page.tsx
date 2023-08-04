import {Book, GetColumns} from "./columns"
import { DataTable } from "./data-table"
import axios from 'axios';
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {Label} from "../components/ui/label.tsx";
import {Input} from "../components/ui/input.tsx";
import {Button} from "../components/ui/button.tsx";
import {API_URL} from "../config/config.ts";

const api = axios.create({
    baseURL:API_URL


})
async function getData(): Promise<Book[]> {

    try {
        const response = await api.get('view/books');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }

}

export default function DemoPage() {
    const [data, setData] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState<string>("");
    const [email, setEmail] = useState("");

    const handleDelete = async (bookId: string) => {

        try {
            await api.delete(`/api/book/delete/${bookId}`);
            getData()
                .then((result) => {
                    setData(result);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleBorrow = (bookId: string) => {
        setSelectedBookId(bookId);
        setIsModalOpen(true);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 10000);
    };

    const handleModalSubmit = async (bookId: string,email:string) => {

        try {
            const requestData = {
                bookId: bookId,
                email: email
            };
            console.log(requestData)
            await api.post(`/api/borrow/add`,requestData);
            getData()
                .then((result) => {
                    setData(result);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } catch (error) {
            console.error('Error creating book:', error);
        }finally {
            setTimeout(() => {
                setIsModalOpen(false);
            }, 2000);


        }
    };


    useEffect(() => {
        // Fetch data from API when the component mounts
        getData()
            .then((result) => {
                setData(result); // Set the data in the state once it's fetched
                setLoading(false); // Update loading state to false
            })
            .catch((error) => {
                console.error('Error loading data:', error);
                setLoading(false); // Update loading state to false even in case of an error
            });
    }, []); // Empty dependency array ensures the effect runs only once

    if (loading) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    return (
        <div >
            {isModalOpen && (
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Add a borrow</CardTitle>
                        <CardDescription>Enter Borrower mail adress</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="bookId">Book ID</Label>
                                <Input type="text"
                                       id="bookId"
                                       value={selectedBookId}
                                       readOnly
                                       disabled/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Borrower Email</Label>
                                <Input type="email"
                                       id="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            </div>

                        </div>
                        <Button onClick={function() {
                            handleModalSubmit(selectedBookId,email)}
                        }
                        >Deploy</Button>
                    </CardContent>
                </Card>            )}
            <DataTable  columns={GetColumns({ handleDelete,handleBorrow })} data={data}  />
        </div>
    );
}

