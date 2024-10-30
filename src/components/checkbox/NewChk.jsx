import React, { useState } from 'react';


const NewChk = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
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
                    className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${isOpen ? 'transform rotate-45 translate-y-2' : ''
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-black mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''
                        }`}
                ></span>
            </div>
            <nav className={`${isOpen ? 'visible scale-100 opacity-100' : 'invisible opacity-0'} popup-window transform scale-75 absolute mt-2 p-2 bg-gray-100 shadow-lg border border-gray-300 right-0 rounded-md transition-all duration-100 `}>
                <h1>Hello</h1>
                <ul className="m-0 p-0 list-none space-y-1">
                    <li>
                        <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">
                            <svg className="mr-3 text-blue-600" height={14} width={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span>Collaborators</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">
                            <svg className="mr-3 text-blue-600" height={14} width={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                            <span>Magic Link</span>
                        </button>
                    </li>
                    <hr className="border-t border-gray-300 my-2" />
                    <li>
                        <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">
                            <svg className="mr-3 text-gray-500" height={14} width={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            <span>Clone</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-blue-400 hover:text-white rounded-md transition-colors">
                            <svg className="mr-3 text-gray-500" height={14} width={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
                            </svg>
                            <span>Edit</span>
                        </button>
                    </li>
                    <hr className="border-t border-gray-300 my-2" />
                    <li>
                        <button className="flex items-center w-full px-4 py-2 text-xs text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors">
                            <svg className="mr-3 text-red-600" height={14} width={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={6} y1={6} x2={18} y2={18} />
                                <line x1={6} y1={18} x2={18} y2={6} />
                            </svg>
                            <span>Delete</span>
                        </button>
                    </li>
                </ul>

            </nav>
        </label>
    );
};

export default NewChk;
