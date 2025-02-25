import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Calendar, Heart, Settings, Home } from 'lucide-react';

// Temporary mock user for demonstration
const mockUser = {
  isAuthenticated: true,
  role: 'student' // Can be 'student', 'faculty', or 'admin'
};

export function Navigation() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const getDashboardLink = () => {
    switch (mockUser.role) {
      case 'student':
        return '/dashboard/student';
      case 'faculty':
        return '/dashboard/faculty';
      case 'admin':
        return '/dashboard/admin';
      default:
        return '/login';
    }
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 rounded-b-2xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#f14621]">VidyalankarEvents</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#f14621] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-[#f14621] transition-colors">Features</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#f14621] transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#f14621] transition-colors">Contact</Link>
            <Link to="/events" className="text-gray-600 hover:text-[#f14621] transition-colors">Events</Link>
            
            {/* Profile Menu */}
            <div className="relative">
              {mockUser.isAuthenticated ? (
                <button 
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all duration-200 group"
                >
                  <User className="w-5 h-5 text-[#f14621]" />
                  <span className="text-gray-700">Account</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to="/login"
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all duration-200 group"
                >
                  <User className="w-5 h-5 text-[#f14621]" />
                  <span className="text-gray-700">Sign In</span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {mockUser.isAuthenticated && (
                <div className={`absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 transition-all duration-200 transform origin-top-right
                  ${isProfileMenuOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                  
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link 
                      to={getDashboardLink()}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Settings className="w-4 h-4 mr-3 text-gray-400" />
                      Dashboard
                    </Link>
                    <Link to="/events/registered" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                      Registered Events
                      <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">3</span>
                    </Link>
                    <Link to="/events/liked" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <Heart className="w-4 h-4 mr-3 text-gray-400" />
                      Liked Events
                      <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">12</span>
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <button 
                      onClick={() => {/* Handle logout */}}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}