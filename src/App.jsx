import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import FeatureCards from './components/Features/FeatureCards';
import Sidebar from './components/Sidebar/Sidebar';
import ProductGrid from './components/products/ProductGrid';
import CartSidebar from './components/cart/CartSidebar';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <HeroSection />
        <FeatureCards />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <Sidebar 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <ProductGrid selectedCategory={selectedCategory} />
          </div>
        </div>
        
        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default App;