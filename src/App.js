import HomePage from './pages/Home/HomePage';
import NavBar from './components/Utility/Navbar/Navbar';
import Footer from './components/Utility/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import CartPage from './pages/Cart/CartPage';
import AllCategoryPage from './pages/Category/AllCategoryPage';
import AllBrandPage from './pages/Brand/AllBrandPage';
import ShopProductsPage from './pages/Products/ShopProductsPage';
import ProductDetalisPage from './pages/Products/ProductDetalisPage';
import ChoosePayMethoudPage from './pages/Checkout/ChoosePayMethoudPage';
import AdminAllProductsPage from './pages/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './pages/Admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './pages/Admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './pages/Admin/AdminAddProductsPage';

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
            <Route path='/AllBrand' element={<AllBrandPage/>} />
            <Route path='/Products' element={<ShopProductsPage/>} />
            <Route path='/Products/:id' element={<ProductDetalisPage/>} />
            <Route path='/Cart' element={<CartPage/>} />
            <Route path='/order/paymethoud' element={<ChoosePayMethoudPage/>} />
            <Route path='/admin/allproducts' element={<AdminAllProductsPage/>} />
            <Route path='/admin/allorders' element={<AdminAllOrdersPage/>} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage/>} />
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>} />
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>} />
            <Route path="/admin/addproduct" element={<AdminAddProductsPage/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
