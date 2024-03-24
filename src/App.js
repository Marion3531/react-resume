import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./sections/Home";
import Career from "./sections/Career";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/career-and-education" element={<Career />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
