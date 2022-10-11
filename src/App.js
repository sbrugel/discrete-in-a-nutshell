import { Routes, Route, Link } from "react-router-dom";
import Ch1Page1 from "./components/Ch1Page1";
import Ch1Page3 from "./components/Ch1Page3";
import Base from "./components/Base";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Ch1Page2 from "./components/Ch1Page2";

function App() {
  return (
    <div>
      <Nav />
      <p id="start">
        Hi, and welcome to this little project of mine. I decided to write up a
        few pages' worth of simplication of Discrete Mathematics concepts as a
        way to test out routing and deploying in <b>React</b>. I don't know how
        much I'll go on with this, but it would be pretty cool if I got a whole
        course's worth of material here, right?
      </p>
      <p>
        <Link to="/c1p1">1.1: Statements</Link>
      </p>
      <p>
        <Link to="/c1p2">1.2: Implications</Link>
      </p>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/c1p1" element={<Ch1Page1 />} />
        <Route path="/c1p2" element={<Ch1Page2 />} />
        <Route path="/c1p3" element={<Ch1Page3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
