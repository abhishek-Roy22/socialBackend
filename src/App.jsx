import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Create from './pages/Create';

function App() {
  return (
    <div className="bg-slate-800 w-full min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
