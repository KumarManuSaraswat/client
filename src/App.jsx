// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Header stays outside Routes so it renders on every page */}
      <Header />
      
      {/* Routes define which component loads based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* The '*' path catches any URL that doesn't match the ones above */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer stays outside Routes so it renders on every page */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;