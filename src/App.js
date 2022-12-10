import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Product from './components/Product';
import NotFound from './components/404';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = React.lazy(() => import("./components/About"))

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Lazy loading example */}
          <Route path='about' element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          } />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='product' element={<Product />} >
            <Route index element={<FeaturedProduct />} />
            <Route path='featured' element={<FeaturedProduct />} />
            <Route path='new' element={<NewProduct />} />
          </Route>
          <Route path='users' element={<Users />} >
            <Route path=':id' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path="/profile" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
