import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Landing}  from './components/Landingpage';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<Landing />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App