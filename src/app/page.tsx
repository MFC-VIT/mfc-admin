import React from 'react';
import { Shield, Users, Settings } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-2xl">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Shield className="text-white" size={40} />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            MFC
            <span className="text-blue-600">Admin</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Club Management Portal
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-12 text-lg max-w-lg mx-auto leading-relaxed">
            Secure access to your club's administrative dashboard and management tools.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3 mx-auto">
                <Users className="text-blue-600" size={24} />
              </div>
              <p className="text-sm text-gray-600">Members</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3 mx-auto">
                <Shield className="text-blue-600" size={24} />
              </div>
              <p className="text-sm text-gray-600">Security</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3 mx-auto">
                <Settings className="text-blue-600" size={24} />
              </div>
              <p className="text-sm text-gray-600">Settings</p>
            </div>
          </div>

          {/* Access Button */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
            Access Portal
          </button>

          {/* Footer */}
          <div className="mt-16 text-gray-400 text-sm">
            <p>&copy; 2025 MFC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}