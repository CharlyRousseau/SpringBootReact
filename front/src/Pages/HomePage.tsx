import DemoPage from "../Book/page.tsx";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import BorrowerPage from "../Borrower/page.tsx";
import BorrowPage from "../Borrow/page.tsx";
import {MainNav} from "../components/ui/main-nav.tsx";

function HomePage() {


    return(
        <>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10">


                <h1 className={"font-extrabold text-2xl"}>Dashboard</h1>
                <Tabs  defaultValue="books" className="mt-5 space-y-4">
                    <TabsList>
                        <TabsTrigger value="books">Books</TabsTrigger>
                        <TabsTrigger value="borrow">Borrows</TabsTrigger>
                        <TabsTrigger value="borrower">Borrowers</TabsTrigger>
                    </TabsList>
                    <TabsContent value="books" className="space-y-4">
                        <DemoPage/>
                    </TabsContent>
                    <TabsContent value="borrow" className="space-y-4">
                        <BorrowPage/>
                    </TabsContent>
                    <TabsContent value="borrower" className="space-y-4">
                        <BorrowerPage/>
                    </TabsContent>
                </Tabs>

            </div>
    </>

    )
}

export default HomePage;