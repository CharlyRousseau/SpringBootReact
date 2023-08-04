
import * as z from "zod"

import { Button } from "../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "../components/ui/input"
import {   Popover,PopoverContent,PopoverTrigger, } from "../components/ui/popover"
import { Calendar } from "../components/ui/calendar"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"
import {useState} from "react";
import {API_URL} from "../config/config.ts";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    author: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    publisher: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    publishedDate: z.date(),
    description: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    industryIdentifiers: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    copy: z.string()
})

export function BookForm() {

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            publisher: "",
            description:"",
            industryIdentifiers: "",
        },
    })
    let bookId: string ="";
    function onSubmit(values: z.infer<typeof formSchema>) {


        const postBook = async () => {
            try {
                const url = API_URL+'api/book/add';
                const response = await axios.post(url, values);
                bookId=response.data;
            } catch (error) {
                console.error('Erreur lors de la requête POST :', error);
            }
        }
        //TO DO ADD THE NUMBER OF COPY AVAILABLE
        postBook().then(function () {
            const postCopy = async () => {
                try {
                    const url = API_URL+'api/copy/add';
                    for (let i = 0; i < parseInt(values.copy); i++) {
                        await axios.post(url,bookId, {
                            headers: { "Content-type": "application/json" },
                        });
                    }
                } catch (error) {
                    console.error('Erreur lors de la requête POST :', error);
                }
            }
            postCopy().then(function (){
                setShowAlert(true);
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            })


        });
    }

    return (
        <div>
        <div className={"flex flex-row justify-center items-center"} >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-96">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Title of the book.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="publisher"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Publisher</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="publishedDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Publication Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "yyyy-mm-dd")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>

                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="industryIdentifiers"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ISBN</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="copy"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Copy available</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="0" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                How Many copy of the book will be available ?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
        </div>
            {showAlert && (
                <Alert className={"mt-5"}>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                        The book has been added !
                    </AlertDescription>
                </Alert>
            )}
        </div>

    )
}