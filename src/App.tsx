import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import FinesList from './pages/FinesList';
import FineDetails from './pages/FineDetails';
import NewFine from './pages/NewFine';
import EditFine from './pages/EditFine';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FinesList />} />
          <Route path="/fine/:id" element={<FineDetails />} />
          <Route path="/fine/edit/:id" element={<EditFine />} />
          <Route path="/new" element={<NewFine />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;