import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Flights from "./pages/Flights";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/flights" replace />} />

                <Route path="/flights" element={<Flights />} />

                {/* Catch-all for unknown routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
