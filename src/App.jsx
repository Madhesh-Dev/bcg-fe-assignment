import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="details/:id" element={<DetailsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
