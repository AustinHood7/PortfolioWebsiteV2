import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

/* 34:45
navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
});
*/

const Navbar2 = () => {

    return(
        <div className="bg-gray-900">
            <header className="fixed flex justify-between text-2xl text-center text-sky-200 font-body">
                <div className="mx-12 md:mr-[62.25vw] maxW:mr-[74vw] my-[15px]">
                    <img src="hoodLogo65.png"></img>
                </div>

                <img src="hamburgerMenu.png" className="absolute right-[.1%] top-[2rem] w-10 aspect-square z-[9999] hidden maxW:block"></img>

                <nav className="">
                    <ul id="primary-navigation"
                    data-visible="false"
                    class="primary-navigation" 
                    className="flex border-2 border-sky-200 md:rounded-l-full z-[9999] mt-3 list-none font-bold
                    maxW:fixed left-[30%] maxW:rounded-l-xl
                    bg-primary backdrop-blur-[1rem] bg-opacity-10 maxW:flex-col maxW:h-full maxW:w-full maxW:pt-[10rem] maxW:pl-[2rem] maxW:translate-x-[100%]
                    lg:pr-10">
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6 border-sky-200">
                            <a href="index.html">
                                <span aria-hidden="true" className="font-extrabold text-primary">00. </span> About
                            </a>
                        </li>
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6">
                            <a href="destination.html">
                                <span aria-hidden="true" className="font-extrabold text-primary">01. </span> Projects
                            </a>            
                        </li>
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6">
                            <a href="crew.html">
                                <span aria-hidden="true" className="font-extrabold text-primary">02. </span> Work
                            </a>            
                        </li>
                        <li className="maxW:text-left maxW:ml-6 maxW:my-6">
                            <a href="technology.html">
                                <span aria-hidden="true" className="font-extrabold text-primary">03. </span> Contact
                            </a>            
                        </li>
                    </ul>
                </nav>
        </header>
        </div>
    )
} 

export default Navbar2