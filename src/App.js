import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Base from "./components/Base";

function App() {
  return (
    <div>
      <p>
        Hi, and welcome to this little project of mine. I decided to write up a
        few pages' worth of simplication of Discrete Mathematics concepts as a
        way to test out routing and deploying in <b>React</b>. I don't know how
        much I'll go on with this, but it would be pretty cool if I got a whole
        course's worth of material here, right?
      </p>
      <p>
        <Link to="/pageone">1.1: Basic Statements</Link>
      </p>
      <p>
        <Link to="/pagetwo">1.2: Basic Symbols</Link>
      </p>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/pageone" element={<Page1 />} />
        <Route path="/pagetwo" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
