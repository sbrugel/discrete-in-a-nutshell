import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageZero from './components/PageZero';

function App() {
  return (
    <div>
      <p>Hello world.</p>
      <p><Link to="/pageone">One</Link></p>
      <p><Link to="/pagetwo">Two</Link></p>
      <Routes>
        <Route path="/" element={<PageZero />}/>
        <Route path="/pageone" element={<PageOne />}/>
        <Route path="/pagetwo" element={<PageTwo />}/>
      </Routes>
    </div>
  );
}

export default App;
