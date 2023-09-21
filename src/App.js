import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArtProjects from './pages/Art Projects';
import Website from './pages/Personal Website';
import SummitBackend from './pages/Summit Backend';
import SummitDatabase from './pages/Summit Database';
import SummitFrontend from './pages/Summit Frontend';
import Layout from "./Components/Layout";
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="art projects" element={<ArtProjects />} />
          <Route path="personal website" element={<Website />} />
          <Route path="summit backend" element={<SummitBackend />} />
          <Route path="summit database" element={<SummitDatabase />} />
          <Route path="summit frontend" element={<SummitFrontend />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
