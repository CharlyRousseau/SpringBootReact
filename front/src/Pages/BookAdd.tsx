import {BookForm} from "../Forms/book-form.tsx";
import {MainNav} from "../components/ui/main-nav.tsx";



function App() {

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
            <BookForm></BookForm>
        </div>
        </>
    )
}

export default App;