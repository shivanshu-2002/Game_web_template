import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import About from './components/Pages/About';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex flex-row bg-[#14133f] min-h-[100vh]">
        <div className="w-[13%] p-3  h-auto border-[2px] border-black border-r-gray-600">
          <Sidebar />
        </div>

        <div className="flex flex-col w-full">
          <div className="h-[15vh] "><Navbar /></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
