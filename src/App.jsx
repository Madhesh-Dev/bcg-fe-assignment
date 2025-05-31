import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

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
