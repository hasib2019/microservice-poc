import { Link } from "react-router-dom";
import type { Route } from "./+types/user-creation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Creation - Banking Microservice" },
    { name: "description", content: "Create new users in the Banking Microservice" },
  ];
}

export default function UserCreation() {
  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] text-gray-800">
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white rounded-md shadow-lg p-6 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900">Create New User Profile</h1>
              <p className="text-sm text-gray-600">Fill in the details below to create a new user account.</p>
            </div>
            
            {/* Profile Picture Section */}
            <div className="mb-6 border-b pb-6">
              <h2 className="text-base font-medium text-gray-900 mb-1">Profile Picture</h2>
              <p className="text-sm text-gray-600 mb-3">Upload a picture for the user profile.</p>
              
              <div className="flex items-center">
                <div className="mr-4 w-16 h-16 border border-gray-300 rounded flex items-center justify-center bg-gray-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z" fill="#9CA3AF"/>
                  </svg>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 flex items-center hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16H15V10H19L12 3L5 10H9V16ZM5 18H19V20H5V18Z" fill="#6B7280"/>
                  </svg>
                  Upload Image
                </button>
              </div>
            </div>
            
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
                <input 
                  type="text" 
                  placeholder="e.g. staff-deposit" 
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Charles User Employe" 
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. user@example.com" 
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter a secure password" 
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option>Select a role</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Manager</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Status</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="active" 
                      name="account-status" 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
                      checked 
                    />
                    <label htmlFor="active" className="ml-2 block text-sm text-gray-700">Active</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="inactive" 
                      name="account-status" 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
                    />
                    <label htmlFor="inactive" className="ml-2 block text-sm text-gray-700">Inactive</label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800">
                Create User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}