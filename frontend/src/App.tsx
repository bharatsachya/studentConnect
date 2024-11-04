import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from './components/landingpage';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App