import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar2 = () => {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return(
        <div className="bg-gray-900">
            <header className="fixed flex justify-between text-2xl text-center text-sky-200 font-body">
                <div className="mx-12 md:mr-[62.25vw] maxW:mr-[74vw] my-[15px]">
                    <img src="hoodLogo65.png"></img>
                </div>


                <div className='border-2 md:hidden absolute rounded-xl right-[.1%] top-[2rem] w-10 aspect-square z-[9999] hidden maxW:block' onClick={handleClick}>
                    <div className='hamburgerMenu'>
                        {!nav ? <MenuIcon className='w-10 text-sky-200'/> : <XIcon className="w-10 text-sky-200"/>}
                    </div>
                </div>

                <nav>
                    <ul className="flex border-2 border-sky-200 md:rounded-l-full z-[9998] mt-3 list-none font-bold
                    maxW:fixed left-[30%] maxW:rounded-l-xl
                    bg-primary backdrop-blur-[1rem] bg-opacity-10 maxW:flex-col maxW:h-full maxW:w-full maxW:pt-[10rem] maxW:pl-[2rem]">
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6 border-sky-200">
                            <a href="index.html">
                                <span className="font-extrabold text-primary">00. </span> About
                            </a>
                        </li>
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6">
                            <a href="destination.html">
                                <span className="font-extrabold text-primary">01. </span> Projects
                            </a>            
                        </li>
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6">
                            <a href="crew.html">
                                <span className="font-extrabold text-primary">02. </span> Work
                            </a>            
                        </li>
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6">
                            <a href="technology.html">
                                <span className="font-extrabold text-primary">03. </span> Contact
                            </a>            
                        </li>
                    </ul>
                </nav>
        </header>
        </div>
    )
} 

export default Navbar2