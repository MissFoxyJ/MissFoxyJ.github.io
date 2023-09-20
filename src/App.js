import './App.css';
import LoadingSpinner from "./loadingSpinner";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import home from './pages/Home';
import about from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadingSpinner />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
