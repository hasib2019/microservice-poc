import { Link } from "react-router-dom";
import type { Route } from "./+types/user-table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Table - Banking Microservice" },
    { name: "description", content: "User management table for Banking Microservice" },
  ];
}

// Sample user data
const users = [
  { id: "endlessspirit", name: "Create User emails @gmail", email: "biplab.KUMAR", role: "Admin", status: "Active" },
  { id: "003340", name: "MR TUPLLAB KUMAR", email: "biplab.kumar.ku", role: "User", status: "Active" },
  { id: "9999999999", name: "9999999999", email: "abc@finekit.com", role: "User", status: "Active" },
  { id: "periwi", name: "xyz@fimo.com", email: "xyz@finekit.com", role: "User", status: "Active" },
  { id: "AZM IKAM SIAM", name: "ikram shaki", email: "ikram.shaki@outlook.com", role: "User", status: "Inactive" },
  { id: "001982", name: "AZM IKRA KM SIAM", email: "01704342...", role: "User", status: "Inactive" },
];

export default function UserTable() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-md shadow-lg p-6">
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-[#000000]">User Profiles</h1>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-700">
                Page 1 of 10
              </div>
              
              <div className="flex items-center">
                <div className="relative w-64 mr-2">
                  <input 
                    type="text" 
                    placeholder="Search user ID..." 
                    className="w-full h-10 px-4 pr-10 bg-white border border-[#E5E7EB] rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <Link to="/user-creation" className="bg-[#000000] text-white px-4 py-2 rounded-md flex items-center">
                  <span className="mr-2">Add New</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33333V12.6667M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700">
                &lt;
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-gray-200 text-gray-700">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700">
                10
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700">
                &gt;
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <button className="text-gray-600 hover:text-gray-900">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 disabled:opacity-50" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 disabled:opacity-50" disabled>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}