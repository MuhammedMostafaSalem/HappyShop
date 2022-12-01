import HomePage from './pages/Home/HomePage';
import NavBar from './components/Utility/Navbar/Navbar';
import Footer from './components/Utility/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import CartPage from './pages/Cart/CartPage';
import AllCategoryPage from './pages/Category/AllCategoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/Register' element={<RegisterPage/>} />
            <Route path='/AllCategory' element={<AllCategoryPage/>} />
            <Route path='/Cart' element={<CartPage/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
