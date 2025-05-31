import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/details" element={<DetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
