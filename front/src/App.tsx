import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage from "./Pages/HomePage.tsx";
import BookAdd from "./Pages/BookAdd.tsx";
    export default function App() {
        return (
            <div className={"h-screen"}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/add" element={<BookAdd />} />
                    </Routes>
                </Router>
            </div>

        );
    }
