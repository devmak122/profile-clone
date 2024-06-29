import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProfileDropdown from './ProfileDropdown'; // Ensure the correct path
import BrowseDropdown from './BrowseDropdown'; // Ensure the correct path
import logo from "../Images/logo.svg"
import ManageDropdown from "./ManageDropdown";
import NotificationDropdown from './NotificationDropdown'; 
import logowhite from "../Images/logowhite.svg";
// Adjust the import path accordingly

const Header = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [browseOpen, setBrowseOpen] = useState(false); // State to control BrowseDropdown visibility
    const [manageDropdownOpen, setManageDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isDropdownOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        window.scrollTo(0, 0);
        setMenuOpen(false);
    };

    const toggleBrowse = () => {
        setBrowseOpen(!browseOpen);
    };

    const toggleManageDropdown = () => {
        setManageDropdownOpen(!manageDropdownOpen);
    }

    const closeManageDropdown = () => {
        setManageDropdownOpen(false);
    }
    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="w-full  bg-black mobile:overflow-x-hidden font-Montserrat mobile:mt-0">
            <nav className="bg-black dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
                    <Link to={"/"} onClick={closeMenu}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logowhite} alt="Logo"  className="w-[55%]"/>
                        </div>
                    </Link>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={menuOpen ? "true" : "false"}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${menuOpen ? "block h-screen w-full justify-start items-start" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col md:flex-row items-center mobile:items-start mobile:text-start p-4 md:p-0 mt-4 border mobile:h-screen border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <div className="relative group">
                                <Link to={"/Browse"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" onClick={(e) => { e.preventDefault(); toggleBrowse(); }}>
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            <i className="fa fa-compass text-white" aria-hidden="true"></i>{'   '}Browse
                                        </p>
                                    </li>
                                </Link>
                                {browseOpen && (
                                    <div className="absolute  flex justify-center right-0 mt-2 w-[700px] z-50">
                                        <BrowseDropdown />
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <Link to="#" className="mobile:border-b mobile:w-full mobile:border-b-secondary" onClick={toggleManageDropdown}>
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:py-4 text-white font-poppins text-[19px] font-normal ${activePage === "/Manage" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            <i className="fa fa-briefcase" aria-hidden="true"></i> {'   '}Manage</p>
                                    </li>
                                </Link>
                                <ManageDropdown isOpen={manageDropdownOpen} />
                            </div>
                            <Link to={"/Group"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" onClick={closeMenu}>
                                <li>
                                    <p className={`block py-2 px-2 mobile:font-semibold mobile:py-4 text-white font-poppins text-[19px] font-normal ${activePage === "/Group" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                        <i className="fa fa-group text-white" aria-hidden="true"></i>{'   '}Group
                                    </p>
                                </li>
                            </Link>
                            <li>
                                <div className="notification">
                                    <button onClick={handleToggleDropdown}> <i className="fa fa-bell text-white" aria-hidden="true"></i></button>
                                    <NotificationDropdown isOpen={isDropdownOpen} onClose={handleCloseDropdown} />
                                </div>
                            </li>
                            <Link to={"/Files"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" onClick={closeMenu}>
                                <li>
                                    <i className="fa fa-folder-open-o text-white" aria-hidden="true"></i>
                                </li>
                            </Link>
                            <Link to={"/Messages"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" onClick={closeMenu}>
                                <li>
                                    <i className="fa fa-envelope text-white" aria-hidden="true"></i>
                                </li>
                            </Link>
                            <Link to={"/"} className="mobile:w-full mobile:my-4" onClick={closeMenu}>
                                <li>
                                    <p className="block py-3 text-white mobile:justify-center mobile:text-center font-[600] text-[20px] font-poppins getInTouch px-5">Post a Project</p>
                                </li>
                            </Link>
                            <li className="text-4xl font-poppins items-center justify-center     bg-white size-10">
                                <ProfileDropdown />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
