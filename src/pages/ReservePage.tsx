import React, { useState } from 'react';

const ReservePage: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleTableSelect = (tableNumber: number) => {
    setSelectedTable(tableNumber);
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservasi meja ${selectedTable} berhasil dikirim!`);
    setShowForm(false);
    setSelectedTable(null);
  };

  const closePopup = () => {
    setShowForm(false);
    setSelectedTable(null);
  };

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary-900">Reservasi Meja</h1>
        </div>
      </header>

      <main className="py-6 lg:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-6 lg:mb-8 text-center text-primary-600 text-base lg:text-lg">
            Pilih meja sesuai layout di bawah ini. Klik salah satu meja untuk melakukan reservasi.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((tableNumber) => (
              <button
                key={tableNumber}
                onClick={() => handleTableSelect(tableNumber)}
                className="bg-white hover:bg-accent-50 border-2 hover:border-accent-400 p-6 lg:p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <div className="text-3xl lg:text-4xl mb-2 group-hover:scale-110 transition-transform">🪑</div>
                <div className="text-base lg:text-lg font-semibold text-primary-900">Meja {tableNumber}</div>
                <div className="text-sm text-primary-600 mt-1">4 Kursi</div>
              </button>
            ))}
          </div>

          {/* Popup Reservasi */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-xl lg:text-2xl font-bold mb-6 text-primary-900">
                  Reservasi Meja {selectedTable}
                </h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Tanggal Reservasi
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Jam Reservasi
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min="09:00"
                      max="19:00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Contoh: 08123456789"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Jumlah Orang
                    </label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Pilih jumlah orang</option>
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4 Orang</option>
                    </select>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={closePopup}
                      className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-primary-800 rounded-lg font-semibold transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-semibold transition-colors"
                    >
                      Konfirmasi Reservasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ReservePage;