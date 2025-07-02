import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Store,
  Lightbulb,
  Puzzle,
  FlaskConical,
} from "lucide-react";

import beanlabLogo from "../components/asset/logo-BeanLab-gray.svg";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124, 127, 132, 0.26), rgba(160, 162, 165, 0.21)), url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Navigation arrows */}
        <button className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 lg:p-3 transition-colors">
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </button>
        <button className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 lg:p-3 transition-colors">
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </button>

        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-accent-300 text-base lg:text-lg mb-4 tracking-wide">
            Welcome to BeanLab
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Coffee Laboratory
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
            Interactive brewing experience led by coffee pros and café-grade
            equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reserve"
              className="bg-primary-700 hover:bg-primary-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-colors"
            >
              BOOK A TABLE
            </Link>
            <Link
              to="/menu"
              className="bg-white hover:bg-accent-100 text-primary-800 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-colors"
            >
              VISIT OUR SHOP
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="w-full h-64 sm:h-80 lg:h-96 rounded-lg shadow-lg"
                style={{
                  backgroundImage:
                    'url("https://plus.unsplash.com/premium_photo-1674931348670-68936350ed55?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 bg-white rounded-full p-3 lg:p-4 shadow-lg flex items-center justify-center">
                <div className="w-16 lg:w-24 h-16 lg:h-24 bg-accent-200 rounded-full flex items-center justify-center">
                  <div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent-300 rounded-full flex items-center justify-center">
                    <span className="text-xl lg:text-2xl flex items-center justify-center">
                      <img
                        src={beanlabLogo}
                        alt="Beanlab Logo"
                        width={24}
                        height={24}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="flex items-center text-primary-700 text-md font-semibold mb-4 tracking-wide">
                <Lightbulb className="w-6 lg:w-6 h-6 lg:h-6 text-primary-700 mr-2" />
                ABOUT US
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                Would You Like
                <br />
                Delicious Coffee
              </h2>
              <p className="text-primary-600 mb-6 leading-relaxed text-sm lg:text-base">
                BeanLab was born from the desire to deliver a coffee experience
                that goes beyond simply drinking. We believe coffee is both an
                art and a science worth exploring and sharing.
              </p>
              <p className="text-primary-600 mb-8 leading-relaxed text-sm lg:text-base">
                By bringing in experienced baristas and professional-grade
                equipment, BeanLab invites customers to brew their own coffee,
                learn techniques, and dive deeper into the world of coffee
                flavors. BeanLab is a place to experiment, create, and connect
                through coffee.
              </p>
              <div className="mb-8">
                <div className="text-xl lg:text-2  font-bold text-primary-800 mb-2">
                  BERIMAN
                </div>
                <div className="text-primary-600 italic text-sm lg:text-base">
                  - Founder & CEO
                </div>
              </div>
              <Link
                to="/menu"
                className="bg-primary-700 hover:bg-primary-800 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                DISCOVER MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="flex items-center justify-center text-primary-700 text-sm font-semibold mb-4 tracking-wide">
              <Puzzle className="w-6 lg:w-6 h-6 lg:h-6 text-primary-700 mr-2" />
              OUR FEATURES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              What We Provide You
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              BeanLab brings you a whole new coffee experience through our
              signature features. We combine education, interaction, and fun in
              a unique concept, making every visit memorable and meaningful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent-200 rounded-lg flex items-center justify-center mb-6">
                <Coffee className="w-6 lg:w-8 h-6 lg:h-8 text-primary-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-primary-900 mb-4">
                High Quality Coffee
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed text-sm">
                We use the best coffee beans from around the world to ensure the
                best coffee experience.
              </p>
              <Link
                to="/menu"
                className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center text-sm"
              >
                Read More →
              </Link>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent-200 rounded-lg flex items-center justify-center mb-6">
                <Store className="w-6 lg:w-8 h-6 lg:h-8 text-primary-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-primary-900 mb-4">
                Brewing experience
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed text-sm">
                Learn how to brew coffee with our expert baristas and enjoy a
                unique coffee experience.
              </p>
              <Link
                to="/custom-session"
                className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center text-sm"
              >
                Read More →
              </Link>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent-200 rounded-lg flex items-center justify-center mb-6">
                <FlaskConical className="w-6 lg:w-8 h-6 lg:h-8 text-primary-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-primary-900 mb-4">
                Personalized Coffee
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed text-sm">
                Discover your ideal flavor by customizing beans, methods, and
                styles to suit your taste.
              </p>
              <Link
                to="/menu"
                className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center text-sm"
              >
                Read More →
              </Link>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent-200 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 lg:w-8 h-6 lg:h-8 text-primary-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-primary-900 mb-4">
                Smart Order
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed text-sm">
                Book your seat, schedule a session, and pay—all in one step. Then just relax and enjoy the experience.
              </p>
              <Link
                to="/custom-session"
                className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
