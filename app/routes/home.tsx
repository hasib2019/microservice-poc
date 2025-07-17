import { Link } from "react-router-dom";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Banking Microservice Dashboard" },
    { name: "description", content: "Banking Microservice Dashboard" },
  ];
}

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Banking Microservice Dashboard</h1>
          <p className="text-xl text-gray-600">Welcome to the Banking Microservice Application</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Management Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
              </div>
              <p className="text-gray-600 mb-6">Manage user accounts, create new users, and view user data.</p>
              <div className="flex flex-col space-y-2">
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  → User Login
                </Link>
                <Link to="/user-creation" className="text-blue-600 hover:text-blue-800 font-medium">
                  → User Creation
                </Link>
                <Link to="/user-table" className="text-blue-600 hover:text-blue-800 font-medium">
                  → User Data Table
                </Link>
              </div>
            </div>
          </div>
          
          {/* Treasury Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5H20V7H4V5ZM4 9H20V11H4V9ZM4 13H20V15H4V13ZM4 17H14V19H4V17Z" fill="#10B981"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Treasury</h2>
              </div>
              <p className="text-gray-600 mb-6">Manage money market positions, view maturity lists, and track tickets.</p>
              <div className="flex flex-col space-y-2">
                <Link to="/treasury" className="text-green-600 hover:text-green-800 font-medium">
                  → Money Market Position
                </Link>
              </div>
            </div>
          </div>
          
          {/* FRAM Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#8B5CF6"/>
                    <path d="M7 12H9V17H7V12Z" fill="#8B5CF6"/>
                    <path d="M11 7H13V17H11V7Z" fill="#8B5CF6"/>
                    <path d="M15 9H17V17H15V9Z" fill="#8B5CF6"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">FRAM</h2>
              </div>
              <p className="text-gray-600 mb-6">Manage financial resource allocation and monitoring.</p>
              <div className="flex flex-col space-y-2">
                <Link to="/fram" className="text-purple-600 hover:text-purple-800 font-medium">
                  → FRAM Management
                </Link>
              </div>
            </div>
          </div>
          
          {/* Product Service Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L6.5 11H17.5L12 2Z" fill="#F59E0B"/>
                    <path d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z" fill="#F59E0B"/>
                    <path d="M3 13.5H11V21.5H3V13.5Z" fill="#F59E0B"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Product Service</h2>
              </div>
              <p className="text-gray-600 mb-6">Manage banking products and services offered to customers.</p>
              <div className="flex flex-col space-y-2">
                <Link to="/product-service" className="text-yellow-600 hover:text-yellow-800 font-medium">
                  → Product Management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
