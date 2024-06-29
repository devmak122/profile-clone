import React, { useState } from 'react';
import yt from "../Images/yt.svg"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    let navigate=useNavigate();
    const handlelogout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="relative  inline-block text-left">
            <div className='flex flex-row justify-center items-center'>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full   px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-50  "
                >

                    <img class="ml-1" src={yt} alt="yt" />
                    <span className="ml-5 text-white text-sm">Username <br />
                        INR</span>


                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-64 text-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <p className='text-[19px] p-3 font-semibold '>Account</p>
                        <Link to="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">View profile</Link>
                        <a href="#membership" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Membership</a>
                        <a href="#account-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Account analytics</a>
                        <a href="#bid-insights" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Bid Insights</a>
                        <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Settings</a>
                        <p className='text-[19px] p-3 font-semibold '>Finances</p>
                        <div className="border-t border-gray-100"></div>
                        <a href="#balance" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Balance ₹0.00 INR</a>
                        <a href="#add-funds" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Add funds</a>
                        <a href="#withdraw-funds" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Withdraw funds</a>
                        <a href="#transaction-history" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Transaction history</a>
                        <a href="#financial-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Financial dashboard</a>
                        <a href="#payment-sharing" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Payment sharing</a>
                        <div className="border-t border-gray-100"></div>
                        <a href="#support" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Support</a>
                        <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem"><button className="btn btn-success"  onClick={handlelogout}>logout</button></a>
                        <div className="border-t border-gray-100"></div>
                        <p className="block px-4 py-2 text-xs text-gray-500">App: 839efb (1719561748 / 2024-06-28)</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
