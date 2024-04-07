import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BecomeACCA from "./components/BecomeACCA";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<BecomeACCA />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
