import { Link } from "react-router-dom";
import type { Route } from "./+types/treasury";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Treasury - Money Market Position" },
    { name: "description", content: "Treasury Money Market Position Blotter" },
  ];
}

export default function Treasury() {
  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] text-gray-800">
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white rounded-md shadow-lg p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h1 className="text-lg font-medium">MM Position Blotter</h1>
              </div>
              <div className="flex items-center space-x-1">
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12H19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="mb-4">
              {/* Action Buttons and Stats */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <button className="bg-black text-white px-3 py-1.5 text-xs rounded flex items-center">
                    <span className="mr-1">+</span>
                    <span>New Deal</span>
                  </button>
                  
                  <button className="bg-gray-200 text-black px-3 py-1.5 text-xs rounded flex items-center">
                    <span>Blotter Entries</span>
                  </button>
                </div>
                
                <div className="flex space-x-4 text-xs">
                  <div>
                    <span className="text-gray-500">CRR Daily: </span>
                    <span className="font-medium">3.5</span>
                  </div>
                  <div>
                    <span className="text-gray-500">CRR Required: </span>
                    <span className="font-medium">4</span>
                  </div>
                  <div>
                    <span className="text-gray-500">BB Current Balance: </span>
                    <span className="font-medium">-2.6 (↓)</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Blotter Current Balance: </span>
                    <span className="font-medium">-714.15</span>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-3 py-1.5 text-xs rounded">
                    Maturity List
                  </button>
                  <button className="text-xs text-gray-600">
                    Ticket List
                  </button>
                  <button className="text-xs text-gray-600">
                    Term Loan Maturity List
                  </button>
                </div>
              </div>
              
              {/* Table */}
              <div className="overflow-x-auto border border-gray-200 rounded">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        SL
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        Particulars
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        Reference
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        Rate
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        Inflow
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        Outflow
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        Balance
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        CRR Requirement
                      </th>
                      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                        CRR (+/-)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Empty state */}
                    <tr className="hover:bg-gray-50">
                      <td colSpan={9} className="px-3 py-16 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 mb-2">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                            <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <p className="text-gray-500 text-sm">No data available</p>
                          <p className="text-gray-400 text-xs mt-1">There are no records to display at the moment.</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2 px-1">
                <div>
                  <span>Page 1 of 0</span>
                </div>
                <div>
                  <span>Total Record: 0</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Toolbar */}
            <div className="flex justify-between items-center border-t pt-3">
              <div className="flex space-x-2">
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12V22H4V12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="p-1.5 rounded-md bg-blue-500 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div>
                <button className="p-1.5 rounded-md bg-gray-200 text-gray-700 text-xs px-3">
                  View only
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6L2 12L8 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}