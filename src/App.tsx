import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Ajuste conforme o caminho do arquivo
import Login from "./components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const App: React.FC = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
