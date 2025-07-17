import { Link } from "react-router-dom";
import type { Route } from "./+types/fram";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Money Market Deal Ticket List" },
    { name: "description", content: "Money Market Deal Ticket List" },
  ];
}

// Sample Money Market Deal data
const dealData = [
  { id: 1, ticketNo: "00000-2024", dealNo: "3", product: "FC Placement Lending", party: "AGRANI BANK LTD", dealType: "New Deal", dealRate: "4.16", dealDate: "19/08/2024", maturityDate: "23/08/2024", currency: "USD", principal: "40,000.00", interest: "0.00", provision: "0.00", taxAmount: "0.00", vat: "0.00", amount: "40,000.00" },
  { id: 2, ticketNo: "00000-2024", dealNo: "8", product: "Term Lending", party: "AGRANI BANK LTD", dealType: "New Deal", dealRate: "4.44", dealDate: "19/08/2024", maturityDate: "20/10/2024", currency: "BDT", principal: "15,800,000.00", interest: "0.00", provision: "0.00", taxAmount: "0.00", vat: "0.00", amount: "15,800,000.00" },
  { id: 3, ticketNo: "00000-2024", dealNo: "20", product: "Call Borrowing", party: "AB BANK", dealType: "New Deal", dealRate: "7.50", dealDate: "04/09/2024", maturityDate: "05/09/2024", currency: "BDT", principal: "30,000,000.00", interest: "0.00", provision: "0.00", taxAmount: "0.00", vat: "0.00", amount: "30,000,000.00" },
  { id: 4, ticketNo: "00000-2024", dealNo: "29", product: "Call Borrowing", party: "AB BANK LTD", dealType: "New Deal", dealRate: "4.00", dealDate: "04/09/2024", maturityDate: "05/09/2024", currency: "BDT", principal: "10,000,000.00", interest: "0.00", provision: "0.00", taxAmount: "0.00", vat: "0.00", amount: "10,000,000.00" },
  { id: 5, ticketNo: "00000-2023", dealNo: "", product: "Term Lending", party: "BNAC Bank", dealType: "Confirmation of Interest", dealRate: "4.00", dealDate: "11/12/2023", maturityDate: "27/12/2023", currency: "BDT", principal: "40,000,000.00", interest: "99,400.00", provision: "0.00", taxAmount: "11,920.00", vat: "0.00", amount: "88,077.00" },
];

export default function Fram() {
  return (
    <div className="w-full min-h-screen bg-[#F0F2F5]">
      <div className="min-h-screen">
        <div className="p-2">
          <div className="bg-white rounded-md shadow-sm border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-200 p-3 rounded-t-md">
              <div className="flex items-center gap-2">
                <Link to="/" className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                  </svg>
                </Link>
                <span className="text-sm font-medium">Money Market Deal Ticket List</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                  </svg>
                </button>
                <button className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fullscreen" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </button>
                <button className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Search and Action Buttons */}
            <div className="p-3 flex justify-between items-center">
              <div className="relative w-64">
                <input 
                  type="text" 
                  placeholder="Search user ID..." 
                  className="w-full h-8 px-3 pr-8 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="absolute right-0 top-0 h-8 px-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm flex items-center">
                  <span className="mr-1">+ New Deal</span>
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center">
                  <span>Blotter</span>
                </button>
              </div>
            </div>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-black text-white text-xs">
                    <th className="px-2 py-2 text-center">#</th>
                    <th className="px-2 py-2 text-left">Ticket No</th>
                    <th className="px-2 py-2 text-left">Deal No</th>
                    <th className="px-2 py-2 text-left">Product</th>
                    <th className="px-2 py-2 text-left">Party</th>
                    <th className="px-2 py-2 text-left">Deal Type</th>
                    <th className="px-2 py-2 text-right">Deal Rate</th>
                    <th className="px-2 py-2 text-center">Deal Date</th>
                    <th className="px-2 py-2 text-center">Maturity Date</th>
                    <th className="px-2 py-2 text-center">Currency</th>
                    <th className="px-2 py-2 text-right">Principal</th>
                    <th className="px-2 py-2 text-right">Interest</th>
                    <th className="px-2 py-2 text-right">Provision</th>
                    <th className="px-2 py-2 text-right">Tax Amount</th>
                    <th className="px-2 py-2 text-right">VAT</th>
                    <th className="px-2 py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-xs">
                  {dealData.map((deal) => (
                    <tr key={deal.id} className="hover:bg-gray-50">
                      <td className="px-2 py-2 text-center">{deal.id}</td>
                      <td className="px-2 py-2 whitespace-nowrap">{deal.ticketNo}</td>
                      <td className="px-2 py-2 whitespace-nowrap">{deal.dealNo}</td>
                      <td className="px-2 py-2 whitespace-nowrap">{deal.product}</td>
                      <td className="px-2 py-2 whitespace-nowrap">{deal.party}</td>
                      <td className="px-2 py-2 whitespace-nowrap">{deal.dealType}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.dealRate}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-center">{deal.dealDate}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-center">{deal.maturityDate}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-center">{deal.currency}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.principal}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.interest}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.provision}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.taxAmount}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.vat}</td>
                      <td className="px-2 py-2 whitespace-nowrap text-right">{deal.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}