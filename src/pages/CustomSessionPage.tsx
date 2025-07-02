import React, { useState } from 'react';

const CustomSessionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    beanType: '',
    brewMethod: '',
    grindLevel: '',
    acidity: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Permintaan sesi custom kopi Anda telah dikirim. Kami akan menghubungi Anda segera.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      beanType: '',
      brewMethod: '',
      grindLevel: '',
      acidity: '',
      notes: ''
    });
  };

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary-900">Sesi Custom Kopi</h1>
        </div>
      </header>

      <main className="py-6 lg:py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-accent-100 border border-accent-300 rounded-lg p-4 lg:p-6 mb-6 lg:mb-8">
            <h2 className="text-lg lg:text-xl font-semibold text-primary-800 mb-2">
              🎯 Tentang Sesi Custom Kopi
            </h2>
            <p className="text-primary-700 text-sm lg:text-base">
              Selamat datang di sesi custom kopi! Di sini Anda bisa meracik kopi sesuai selera dengan 
              panduan langsung dari barista profesional kami. Sesi ini cocok untuk pemula maupun 
              coffee enthusiast yang ingin mengeksplorasi cita rasa kopi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 lg:p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {/* Personal Information */}
              <div className="md:col-span-2">
                <h3 className="text-base lg:text-lg font-semibold text-primary-900 mb-4">Informasi Pribadi</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="contoh@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="08123456789"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Tanggal Sesi *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Waktu Sesi *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Pilih waktu</option>
                  <option value="10:00">10:00 - 11:30</option>
                  <option value="13:00">13:00 - 14:30</option>
                  <option value="15:00">15:00 - 16:30</option>
                  <option value="17:00">17:00 - 18:30</option>
                </select>
              </div>

              {/* Coffee Preferences */}
              <div className="md:col-span-2 mt-6">
                <h3 className="text-base lg:text-lg font-semibold text-primary-900 mb-4">Preferensi Kopi</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Jenis Biji Kopi *
                </label>
                <select
                  name="beanType"
                  value={formData.beanType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Pilih jenis biji</option>
                  <option value="arabica">Arabica (Mild & Fruity)</option>
                  <option value="robusta">Robusta (Strong & Bold)</option>
                  <option value="blend">Blend Specialty (Balanced)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Metode Seduh *
                </label>
                <select
                  name="brewMethod"
                  value={formData.brewMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Pilih metode</option>
                  <option value="v60">V60 Pour Over</option>
                  <option value="french-press">French Press</option>
                  <option value="syphon">Syphon</option>
                  <option value="espresso">Espresso</option>
                  <option value="aeropress">AeroPress</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Tingkat Kekasaran Gilingan *
                </label>
                <select
                  name="grindLevel"
                  value={formData.grindLevel}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Pilih tingkat</option>
                  <option value="coarse">Kasar (French Press)</option>
                  <option value="medium">Sedang (Pour Over)</option>
                  <option value="fine">Halus (Espresso)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Tingkat Keasaman *
                </label>
                <select
                  name="acidity"
                  value={formData.acidity}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Pilih tingkat</option>
                  <option value="low">Rendah (Smooth)</option>
                  <option value="medium">Sedang (Balanced)</option>
                  <option value="high">Tinggi (Bright & Fruity)</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Catatan Tambahan
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Contoh: Saya ingin belajar tentang latte art, atau saya suka aroma vanilla..."
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6 lg:mt-8">
              <button
                type="submit"
                className="bg-primary-700 hover:bg-primary-800 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Kirim Permintaan Sesi
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CustomSessionPage;