import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }
    
    const total = getTotalPrice();
    alert(`Pesanan Anda sebesar Rp${total.toLocaleString()} telah diterima. Silakan bayar di tempat.`);
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div>
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary-900">Keranjang Anda</h1>
          </div>
        </header>

        <main className="py-12 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="bg-accent-50 rounded-lg p-8 lg:p-12">
              <ShoppingCart className="w-16 lg:w-24 h-16 lg:h-24 mx-auto text-primary-400 mb-6" />
              <h2 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4">Keranjang Kosong</h2>
              <p className="text-primary-600 mb-8 text-sm lg:text-base">Belum ada item di keranjang Anda. Yuk mulai pilih kopi favorit!</p>
              <a
                href="/menu"
                className="bg-primary-700 hover:bg-primary-800 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Lihat Menu
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary-900">Keranjang Anda</h1>
        </div>
      </header>

      <main className="py-6 lg:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg lg:text-xl font-semibold text-primary-900">Daftar Pesanan</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.id} className="px-4 lg:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-medium text-primary-900">{item.name}</h3>
                    <p className="text-primary-700 font-semibold text-sm lg:text-base">Rp{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-base lg:text-lg font-semibold text-primary-900 min-w-[100px] text-right">
                      Rp{(item.price * item.quantity).toLocaleString()}
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="px-4 lg:px-6 py-4 bg-accent-50 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg lg:text-xl font-semibold text-primary-900">Total:</span>
                <span className="text-xl lg:text-2xl font-bold text-primary-700">
                  Rp{getTotalPrice().toLocaleString()}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-primary-800 py-3 rounded-lg font-semibold transition-colors"
                >
                  Kosongkan Keranjang
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Pesan & Bayar di Tempat
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;