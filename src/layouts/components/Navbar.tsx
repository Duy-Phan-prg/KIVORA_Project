import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/components';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-red-500 font-montserrat">KIVORA</span>
            <span className="text-xs text-gray-500 ml-2">HỌC THÔNG MINH HƠN</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              TÌM GIA SƯ
            </Link>
            <Link to="/classes" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              LỚP HỌC
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              CỘNG ĐỒNG
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              THỂ ĐỐI HỌC TẬP
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              VỀ CHÚNG TÔI
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/auth/login" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              LOG IN
            </Link>
            <Button variant="primary" size="sm" className="bg-red-500 hover:bg-red-600">
              <Link to="/auth/register" className="text-white font-semibold">
                SIGN UP
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;