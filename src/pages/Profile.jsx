import React from 'react';
import woman from '../Images/woman.jpg';

function Profile() {
  return (
    <div>
      <div className="relative h-64 bg-center">
        <img src={woman} alt="woman" className="h-full w-full object-cover" />
      </div>
      <div className="relative -mt-24 px-4 flex justify-center">
        <div className="bg-white mr-32 rounded-lg font-poppins shadow-md p-6 w-full md:w-3/4 lg:w-1/2">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile Picture"
                className="w-64 h-64 rounded-none"
              />
              <div className="ml-4 items-start">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold">Devkumar M.</h2>
                  <p className="text-black-500">@devmakwana2</p>
                </div>
                <p className="text-black-500">Web Developer</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex justify-between w-full">
                  <div className="mr-8">
                    <p className="text-black-500 font-bold">Jobs Completed</p>
                    <p className="text-black-600">N/A</p>
                  </div>
                  <div className="mr-8">
                    <p className="text-black-500 font-bold">On Time</p>
                    <p className="text-black-600">N/A</p>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <div className="mr-8">
                    <p className="text-black-500 font-bold">On Budget</p>
                    <p className="text-black-600">N/A</p>
                  </div>
                  <div className="mr-8">
                    <p className="text-black-500 font-bold">Repeat Hire Rate</p>
                    <p className="text-black-600">N/A</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <button className="bg-primary hover:bg-primary-100 font-mono text-white font-bold py-2 px-4 rounded mb-4">
                Edit Profile
              </button>
             
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between"></div>
            <div className="mt-4">
              <p className="text-black-500 font-bold">General</p>
              <p className="text-black-600">
                I am a web developer in React JS & Node Express JS, I know Tailwind CSS,
                TypeScript, HTML, CSS, JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 gap-4 font-poppins">
          <div className="bg-white mr-56 rounded-lg shadow-md p-4">
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
                  <button className="bg-transparent justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
                    Join
                  </button>
                </li>
                <li className="flex items-center mt-2">
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  <span className="ml-2 text-black-600">Identity Verified</span>
                  <button className="bg-transparent justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
                    Verify
                  </button>
                </li>
                <li className="flex items-center mt-2">
                  <i className="fa fa-paypal" aria-hidden="true"></i>
                  <span className="ml-2 text-black-600">Payment Verified</span>
                  <button className="bg-transparent justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
                    Verify
                  </button>
                </li>
                <li className="flex items-center mt-2">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className="ml-2 text-black-600">Phone Verified</span>
                  <button className="bg-transparent justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded"></button>
                </li>
                <li className="flex items-center mt-2">
                  <i className="fa fa-envelope-open" aria-hidden="true"></i>
                  <span className="ml-2 text-black-600">Email Verified</span>
                  <button className="bg-transparent flex justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
                    Verify
                  </button>
                </li>
                <li className="flex items-center mt-2">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  <span className="ml-2 text-black-600">Facebook Connected</span>
                  <button className="bg-transparent flex justify-end items-end hover:text-current font-mono text-blue-700 font-bold py-2 px-4 rounded">
                    Connect
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
