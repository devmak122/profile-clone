import React from 'react';
import woman from '../Images/woman.jpg'

function Profile() {
  return (
    
    <div>
      <div className="relative h-64 bg-center">
        <img src={woman} alt="woman" className="h-full w-full object-cover" />
      </div>
      <div className="relative -mt-24 px-4 flex justify-center">
        <div className="bg-white mr-32 rounded-lg  font-poppins shadow-md p-6 w-full md:w-3/4 lg:w-1/2">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile Picture"
                className="w-64 h-64 "
              />
              <div className="ml-4 items-start">
                <div className='flex flex-row gap-4'>
                <h2 className="text-2xl font-bold">Devkumar M.</h2>
                <p className="text-black-500">@devmakwana2</p>
                </div>
                <p className="text-black-500">Web Developer</p>
              </div>
        </div>
        <div>
          <button className="bg-primary hover:bg-primary-100 font-mono text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <p className="text-black-500 font-bold">Jobs Completed</p>
            <p className="text-black-600">N/A</p>
          </div>
          <div>
            <p className="text-black-500 font-bold">On Time</p>
            <p className="text-black-600">N/A</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-black-500 font-bold">On Budget</p>
            <p className="text-black-600">N/A</p>
          </div>
          <div>
            <p className="text-black-500 font-bold">Repeat Hire Rate</p>
            <p className="text-black-600">N/A</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-black-500 font-bold">General</p>
          <p className="text-black-600">
            I am web developer in react js & node express js, I know tailwind css,
            typescript, html, css, javascript.
          </p>
        </div>
      </div>
     
    </div>
    <div className="mt-4 gap-4 font-poppins">
    <div className="bg-white  mr-56 rounded-lg shadow-md p-4">
          <div>
            <p className="text-black-500 font-bold">Verifications</p>
            <ul>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-black-600">
                  Preferred Freelancer
                </span>
                <button className="bg-transparent  justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
         Join
          </button>
              </li>
              <li className="flex items-center mt-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-black-600">Identity Verified</span>
                <button className="bg-transparent  justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
         Join
          </button>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                </svg>
                <span className="ml-2 text-black-600">
                  Payment Verified
                </span>
                <button className="bg-transparent  justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
         Join
          </button>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.22l.78.33a.75.75 0 00.28.57v2.22l-1.28.57a.75.75 0 00-.28.57H3a1 1 0 01-1-1V2.22l1.28-.57a.75.75 0 00.28-.57V3z" />
                  <path d="M18 3a1 1 0 011-1h2.22l-.78.33a.75.75 0 00-.28.57v2.22l1.28.57a.75.75 0 00.28.57H21a1 1 0 011 1v2.22l-1.28.57a.75.75 0 00-.28.57H19a1 1 0 01-1-1V2.22l1.28-.57a.75.75 0 00.28-.57V3z" />
                  <path d="M3 6a1 1 0 011-1h1.22l.78.33a.75.75 0 00.28.57v2.22l-1.28.57a.75.75 0 00-.28.57H3a1 1 0 01-1-1V5.22l1.28-.57a.75.75 0 00.28-.57V6z" />
                  <path d="M18 6a1 1 0 011-1h1.22l-.78.33a.75.75 0 00-.28.57v2.22l1.28.57a.75.75 0 00.28.57H21a1 1 0 011 1v2.22l-1.28.57a.75.75 0 00-.28.57H19a1 1 0 01-1-1V5.22l1.28-.57a.75.75 0 00.28-.57V6z" />
                  <path d="M3 10a1 1 0 011-1h1.22l.78.33a.75.75 0 00.28.57v2.22l-1.28.57a.75.75 0 00-.28.57H3a1 1 0 01-1-1V9.22l1.28-.57a.75.75 0 00.28-.57V10z" />
                  <path d="M18 10a1 1 0 011-1h1.22l-.78.33a.75.75 0 00-.28.57v2.22l1.28.57a.75.75 0 00.28.57H21a1 1 0 011 1v2.22l-1.28.57a.75.75 0 00-.28.57H19a1 1 0 01-1-1V9.22l1.28-.57a.75.75 0 00.28-.57V10z" />
                  <path d="M3 14a1 1 0 011-1h1.22l.78.33a.75.75 0 00.28.57v2.22l-1.28.57a.75.75 0 00-.28.57H3a1 1 0 01-1-1V13.22l1.28-.57a.75.75 0 00.28-.57V14z" />
                  <path d="M18 14a1 1 0 011-1h1.22l-.78.33a.75.75 0 00-.28.57v2.22l1.28.57a.75.75 0 00.28.57H21a1 1 0 011 1v2.22l-1.28.57a.75.75 0 00-.28.57H19a1 1 0 01-1-1V13.22l1.28-.57a.75.75 0 00.28-.57V14z" />
                </svg>
                <span className="ml-2 text-black-600">Phone Verified</span>
                <button className="bg-transparent  justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
         Join
          </button>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M18 7a1 1 0 011 1v5a1 1 0 01-1 1h-3.18a3 3 0 01-2.83 2H8a3 3 0 01-2.83-2H2a1 1 0 01-1-1V8a1 1 0 011-1h4.18a3 3 0 012.83-2h2a3 3 0 012.83 2H18zm-5.67 3a1 1 0 00-.83.44L10 12.5 8.5 10.93a1 1 0 00-1.5 1.32L10 15.5l3.17-4.24a1 1 0 00-.84-1.44z" />
                </svg>
                <span className="ml-2 text-black-600">Email Verified</span>
                <button className="bg-transparent  justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
         Join
          </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
