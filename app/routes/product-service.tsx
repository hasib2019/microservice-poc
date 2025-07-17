import { Link } from "react-router-dom";
import type { Route } from "./+types/product-service";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product Service - Banking Microservice" },
    { name: "description", content: "Product Service for Banking Microservice" },
  ];
}

// Sample product data
const products = [
  { id: 1, name: "Savings Account", category: "Accounts", interestRate: "3.5%", minBalance: "1,000", status: "Active" },
  { id: 2, name: "Current Account", category: "Accounts", interestRate: "0.5%", minBalance: "5,000", status: "Active" },
  { id: 3, name: "Fixed Deposit", category: "Deposits", interestRate: "7.5%", minBalance: "10,000", status: "Active" },
  { id: 4, name: "Home Loan", category: "Loans", interestRate: "8.5%", minBalance: "N/A", status: "Active" },
  { id: 5, name: "Personal Loan", category: "Loans", interestRate: "12.5%", minBalance: "N/A", status: "Inactive" },
];

export default function ProductService() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-md shadow-lg p-6">
            {/* Header with ERA logo and branch name */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" fill="#E6F0FF"/>
                    <path d="M27.5 15L20 10L12.5 15L20 20L27.5 15Z" fill="#FF4D4D"/>
                    <path d="M20 20L12.5 15V25L20 30V20Z" fill="#FF4D4D"/>
                    <path d="M20 20V30L27.5 25V15L20 20Z" fill="#FF4D4D"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">ERA</h1>
                  <p className="text-sm text-gray-500">Eastern Refinery Ltd.</p>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">PALTAN BRANCH</h2>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md text-sm">Add</button>
                <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md text-sm">Mod</button>
                <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md text-sm">Enq</button>
                <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md text-sm">Save</button>
                <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md text-sm">CP</button>
                <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md text-sm">Exit</button>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex -mb-px">
                <button className="mr-8 py-2 border-b-2 border-blue-500 text-blue-600 font-medium">
                  Key Parameter
                </button>
                <button className="mr-8 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  AC Related Details
                </button>
                <button className="mr-8 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Interest Details
                </button>
                <button className="mr-8 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Others Setup
                </button>
              </div>
            </div>
            
            {/* Product Parameter Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Product Parameter</h2>
              
              <div className="flex mb-4">
                <div className="flex items-center mr-6">
                  <input type="radio" id="copy-product" name="product-action" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="copy-product" className="ml-2 text-sm text-gray-700">Copy Another Product</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="new-product" name="product-action" className="h-4 w-4 text-blue-600 focus:ring-blue-500" checked />
                  <label htmlFor="new-product" className="ml-2 text-sm text-gray-700">New Product</label>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deposit AC Type</label>
                  <input type="text" value="SDS" className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Corporate/Privileged Account</label>
                  <input type="text" value="Corporate Privileged Account" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700" />
                </div>
              </div>
            </div>
            
            {/* Product Related Information */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Product Related Information</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                  <input type="text" value="SDS" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                  <input type="text" value="SB-CORP-SAL" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Nature</label>
                  <div className="relative">
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none pr-8">
                      <option>CORPORATE PRIVILEGED ACCOUNT</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                  <input type="text" value="001" className="w-20 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 mr-2" readOnly />
                  <input type="text" value="SAVINGS ACCOUNTS" className="w-48 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700" readOnly />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prefix</label>
                  <input type="text" value="34" className="w-20 p-2 border border-gray-300 rounded-md bg-white text-gray-700" />
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Key parameter</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Balance Confirm</label>
                  <div className="relative">
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none pr-8">
                      <option>H-Halfyly</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Min Balance</label>
                  <div className="relative">
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none pr-8">
                      <option>Yes</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Over Draft</label>
                  <div className="relative">
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none pr-8">
                      <option>No</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excise Frequency</label>
                  <input type="text" value="12" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Auto Generation Y/N</label>
                  <div className="flex items-center">
                    <input type="text" value="Y" className="w-10 p-2 border border-gray-300 rounded-md bg-white text-gray-700 mr-2" />
                    <button className="p-2 bg-gray-100 border border-gray-300 rounded-md">
                      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Action Buttons */}
            <div className="flex space-x-2 mt-8">
              <button className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-md text-sm">Open</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-md text-sm">Exit</button>
              <div className="flex-grow"></div>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-md text-sm">Others</button>
            </div>
            
            {/* Table at the bottom */}
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Type</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Effective Date</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Curr. Code</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Amount Slab</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Day Slab</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Int Rate %</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Debit Rate %</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Minimum Balance</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Minimum Amount</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Product GL Code</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Receivable GL Code</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Payable GL Code</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overdue Int. A/c Code</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">???</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">??/??/??</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">????</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">????</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">????</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">?.?? - ?.??</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">?.??</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">??.??</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">??.??</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">?????.??</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">Dummy</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">????</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Dummy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Next Button */}
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Next Tab
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}