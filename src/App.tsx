import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext';
import FinesList from './pages/FinesList';
import FineDetails from './pages/FineDetails';
import NewFine from './pages/NewFine';
import EditFine from './pages/EditFine';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import ChangePassword from "./pages/ChangePassword";
import {AuthProvider, useAuth} from "./context/AuthProvider"; // Импортируйте useAuth
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <ThemeProvider>
                        <Routes>
                            <Route path="/" element={<ProtectedRoute><FinesList/></ProtectedRoute>}/>
                            <Route path="/fine/:id" element={<ProtectedRoute><FineDetails/></ProtectedRoute>}/>
                            <Route path="/fine/edit/:id" element={<ProtectedRoute><EditFine/></ProtectedRoute>}/>
                            <Route path="/new" element={<ProtectedRoute><NewFine/></ProtectedRoute>}/>
                            <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
                            <Route path="/notifications" element={<ProtectedRoute><Notifications/></ProtectedRoute>}/>
                            <Route path="/change-password" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}/>
                            <Route path="/login" element={<LoginPage/>}/> {/* Страница авторизации */}
                        </Routes>
                    </ThemeProvider>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

const ProtectedRoute = ({children}) => {
    let isLoginned = localStorage.getItem('is_loginned') === 'true';
    console.log(isLoginned);
    return isLoginned ? children : <Navigate to="/login"/>;
};

export default App;
