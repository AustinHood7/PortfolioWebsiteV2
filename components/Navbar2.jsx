import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const Navbar2 = () => {

    return(
        <header className="flex justify-between text-2xl text-center bg-gray-900 text-sky-200 font-body">
            <div className="mx-12 my-[15px]">
                <img src="hoodLogo65.png"></img>
            </div>

            <button class="menuToggle" className="absolute w-[1rem] aspect-square top-[2rem] right-[2rem] z-[9999]"></button>

            <nav>
                <ul className="flex p-0 m-0 mt-3 list-none font-bold
                maxW:fixed left-[30%] 
                bg-primary backdrop-blur-[1rem] bg-opacity-10 maxW:flex-col maxW:h-full maxW:w-full maxW:pt-[10rem] maxW:pl-[2rem]
                lg:pr-10">
                    <li className="maxW:text-left maxW:ml-6 maxW:my-6">
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
    )
} 

export default Navbar2