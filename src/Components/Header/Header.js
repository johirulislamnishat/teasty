import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo2.png';
import { NavLink } from 'react-router-dom';
import React from 'react';


const Header = () => {

    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="relative bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div>
                        <a href="">
                            <img className='w-28' src={logo} alt="" />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <nav className='flex items-center space-x-4'>
                            <span>{cart}</span>
                            <NavLink to="#">Login</NavLink>
                            <NavLink className='px-8 py-2 clrPrimary rounded-full text-white' to="#">Sign Up</NavLink>

                        </nav>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto"
                                    src={logo} alt="logo" />
                            </div>

                            <div className="-mr-2 -my-2 md:hidden">
                                <button id="menuBtn" onClick="navToggle()" type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    aria-expanded="false">
                                    <span className="sr-only">Open menu</span>


                                    {/* icon  */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="bg-indigo-700"
                                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>


                        </div>

                        <div id="menu" className="mt-6 hidden">
                            <NavLink to="#">Login</NavLink>
                            <NavLink className='px-8 py-2 clrPrimary rounded-full text-white' to="#">Sign Up</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );




};

export default Header;