import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import "./App.css";

import AppRouter from "./components/appRouter/AppRouter";

function App() {

    return (
        <BrowserRouter>
            <Router>
                <AppRouter/>
            </Router>
        </BrowserRouter>
    );
}

export default App;
