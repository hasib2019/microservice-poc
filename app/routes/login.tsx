import { Link } from "react-router-dom";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Banking Microservice" },
    { name: "description", content: "Login to Banking Microservice" },
  ];
}

export default function Login() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="h-full bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]">
        <div className="flex items-center justify-center h-full">
          <div className="w-[448px] h-[464px] bg-white rounded-md shadow-lg">
            <div className="flex flex-col items-center">
              <div className="mt-[42px]">
                <img src="/images/logo.svg" alt="Logo" className="w-[187px] h-[54px]" />
              </div>
              
              <div className="mt-[32px] text-center">
                <h1 className="text-2xl font-semibold font-roboto text-black">Sign In</h1>
              </div>
              
              <form className="w-[384px] mt-[32px]">
                <div className="mb-[24px]">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="User ID" 
                      className="w-full h-[50px] px-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-[#ADAEBC] focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <div className="absolute right-4 top-[13px]">
                      <img src="/images/user-icon.svg" alt="User" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-[24px]">
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full h-[50px] px-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-[#ADAEBC] focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <div className="absolute right-4 top-[13px]">
                      <img src="/images/password-icon.svg" alt="Password" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-[24px]">
                  <label className="flex items-center">
                    <img src="/images/checkbox-icon.svg" alt="Checkbox" className="w-5 h-5 mr-[5px]" />
                    <span className="text-sm text-[#6C757D] font-poppins">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-black font-poppins">Forgot password?</a>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full h-[48px] bg-black text-white rounded font-medium text-base"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}