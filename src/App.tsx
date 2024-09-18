import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './components/Form';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />

          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}
