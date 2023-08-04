import {Borrower, columns} from "./columns"
import { DataTable } from "./data-table"
import axios from 'axios';
import {useEffect, useState} from "react";
import {API_URL} from "../config/config.ts";
const api = axios.create({
    baseURL:API_URL
})
async function getData(): Promise<Borrower[]> {
    // Fetch data from your API here.

    try {
        const response = await api.get('api/borrower/all');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }

}

export default function BorrowerPage() {
    const [data, setData] = useState<Borrower[]>([]); // State to store the data
    const [loading, setLoading] = useState(true); // State to track loading state

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
            <DataTable columns={columns} data={data} /> {/* Display the DataTable once data is fetched */}
        </div>
    );
}

