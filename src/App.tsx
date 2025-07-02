import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ReservePage from './pages/ReservePage';
import CustomSessionPage from './pages/CustomSessionPage';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/custom-session" element={<CustomSessionPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;