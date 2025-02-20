import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NewChk = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-gray-900 mr-2">
            <label className="burger block cursor-pointer" htmlFor="burger">
                <input
                    type="checkbox"
                    id="burger"
                    className="hidden"
                    checked={isOpen}
                    onChange={toggleMenu}
                />
                <div>
                    <span
                        className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${isOpen ? 'transform rotate-45 translate-y-2' : '' }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-black mb-1 transition-opacity ${isOpen ? 'opacity-0' : '' }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-1' : '' }`}
                    ></span>
                </div>
                <nav className={` popup-window transform  absolute right-0 mt-10 p-2 bg-gray-100 shadow-lg border border-gray-300 rounded-md transition-all duration-100 ${isOpen ? 'scale-125 opacity-100 visible' : 'opacity-0 invisible scale-75'}`}>
                    <ul className="m-0 p-0 list-none space-y-1 ">
                        <li>
                            <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors"> 
                                                                        
                                <span><NavLink to="/" onClick={toggleMenu}>Home</NavLink></span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">
                                <span><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></span>
                            </button>
                        </li>
                        <hr className="border-t border-gray-300 my-2" />
                        <li>
                            <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">

                                <span><NavLink to="/profiles" onClick={toggleMenu}>Profiles</NavLink></span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">
                                <span><NavLink to="/contacts" onClick={toggleMenu}>Contacts</NavLink></span>
                            </button>
                        </li>
                        <hr className="border-t border-gray-300 my-2" />
                        <li>
                            <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors">
                                <span>Delete</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </label>

        </div>
    );
};

export default NewChk;
