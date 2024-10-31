import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Checkbox from "../checkbox/Checkbox";

function Header() {
    const [fla, useFla] = useState(false);
    return (
        <>
            <header className='w-full h-20 bg-white  flex  vsm:px-4 py-4 justify-center items-center border border-b-lime-500 shadow-md '  >
                <div className="w-full xl:w-9/12 bg-white  flex px-4 items-center justify-between ">
                    <div className='w-auto text-start vsm:text-3xl text-2xl font-bold '>
                        Hello World
                    </div>
                    <div className='w-2/5 xl:w-1/3 hidden md:flex flex-col justify-center '>
                        <ul className='flex items-center justify-between '>
                            <li >
                                <NavLink to="/" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                    Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/projects" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                    Projects
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/profiles" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                    Profiles
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                    Contacts
                                </NavLink>
                            </li>
                            {/* <li >
                                <NavLink to="/" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                    Home
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <div className='w-auto text-end hidden md:block cursor-pointer'>
                        <h1 className='bg-blue-800 w-auto font-bold p-2 px-5 rounded-2xl text-white'>
                            Resume
                        </h1>
                    </div>

                    {/* // Three line button */}
                    <div className="md:hidden flex justify-between  items-center">                        
                        <Checkbox/>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Header