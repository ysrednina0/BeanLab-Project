import React from "react";
import { Instagram, Mail, MapPin } from "lucide-react";
import beanlabLogo from "../asset/logo-BeanLab-white.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="text-xl lg:text-2xl font-bold mb-6 flex items-center">
              <span className="text-accent-300 ">
                <img
                  src={beanlabLogo}
                  alt="Beanlab Logo"
                  width={24}
                  height={24}
                  className="ml-3 mr-4"
                />
              </span>
              BeanLab.
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <div>@beanlab_official</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <div>beanlabofc@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <div>Sleman, Yogyakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-6">Our Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-accent-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-accent-300 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/reserve"
                  className="hover:text-accent-300 transition-colors"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="/custom-session"
                  className="hover:text-accent-300 transition-colors"
                >
                  Custom Sessions
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="hover:text-accent-300 transition-colors"
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>High Quality Coffee</li>
              <li>Brewing Experience</li>
              <li>Coffee Workshops</li>
              <li>Table Reservations</li>
              <li>Smart Order</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-6">
              Our Shop Location
            </h3>
            <div className="bg-accent-200 rounded-lg h-32 sm:h-40 lg:h-48 flex items-center justify-center">
              <div className="text-primary-700 text-center">
                <MapPin className="w-6 lg:w-8 h-6 lg:h-8 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">
                  Interactive Map
                </p>
                <p className="text-xs lg:text-sm">
                  Sleman, Yogyakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent-200 text-sm text-center md:text-left">
            Copyright © BeanLab 2025. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow us on social media</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
