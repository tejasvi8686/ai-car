"use client";

import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <Car className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Vehiql AI</span>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Search Cars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Test Drive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Divider */}
          <div className="w-24 h-1 bg-blue-400 rounded-full mb-8"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>© 2025 Vehiql AI. Made with ❤️ by Tejasvi Raj</p>
          </div>
        </div>
      </div>
    </footer>
  );
}