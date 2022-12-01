import HomePage from './pages/Home/HomePage';
import NavBar from './components/Utility/Navbar/Navbar';
import Footer from './components/Utility/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/Cart' element={<CartPage/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
