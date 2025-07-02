import React from 'react';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const MenuPage: React.FC = () => {
  const { addItem } = useCart();

  const menuData: MenuItem[] = [
    {
      id: 'espresso',
      name: 'Espresso',
      price: 18000,
      description: 'Shot espresso murni dengan crema sempurna',
      image: 'https://images.pexels.com/photos/5567610/pexels-photo-5567610.jpeg'
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      price: 22000,
      description: 'Perpaduan espresso dengan steamed milk dan foam',
      image: 'https://images.pexels.com/photos/894696/pexels-photo-894696.jpeg'
    },
    {
      id: 'latte',
      name: 'Latte',
      price: 23000,
      description: 'Espresso dengan steamed milk dan sedikit foam',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
    },
    {
      id: 'manual-brew',
      name: 'Manual Brew',
      price: 25000,
      description: 'Kopi seduh manual dengan metode V60 atau French Press',
      image: 'https://images.pexels.com/photos/9167543/pexels-photo-9167543.jpeg'
    },
    {
      id: 'signature-coffee',
      name: 'Signature Coffee',
      price: 27000,
      description: 'Racikan khusus BeanLab dengan biji kopi premium',
      image: 'https://images.pexels.com/photos/7666354/pexels-photo-7666354.jpeg'
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      price: 24000,
      description: 'Kopi dingin dengan ekstraksi dingin selama 12 jam',
      image: 'https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg'
    }
  ];

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price
    });
    
    // Show feedback
    const button = document.activeElement as HTMLElement;
    const originalText = button.textContent;
    button.textContent = 'Ditambahkan! ✓';
    button.classList.add('bg-green-600', 'hover:bg-green-700');
    button.classList.remove('bg-primary-700', 'hover:bg-primary-800');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('bg-green-600', 'hover:bg-green-700');
      button.classList.add('bg-primary-700', 'hover:bg-primary-800');
    }, 1500);
  };

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary-900">BeanLab's Menu</h1>
        </div>
      </header>

      <main className="py-6 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section>
            {/* <h2 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-center text-primary-800">Menu Kami</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {menuData.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div 
                    className="w-full h-40 sm:h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-primary-900 mb-2">{item.name}</h3>
                    <p  className="text-primary-600 mb-4 text-sm leading-relaxed h-12 overflow-hidden line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl lg:text-2xl font-bold text-primary-700">
                        Rp{item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-primary-700 hover:bg-primary-800 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base"
                      >
                        Tambah ke Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;