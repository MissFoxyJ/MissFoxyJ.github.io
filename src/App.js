import LoadingSpinner from "./loadingSpinner";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <header className="nav-area">
      <a href="/" className="logo">
        Logo
      </a>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </header>
  );
}

export default App;
