import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

// Layouts
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter basename="/skiClub">
            <Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path='*' element={< NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;