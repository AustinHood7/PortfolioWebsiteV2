import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const Navbar2 = () => {

    return(
        <header className="flex justify-between text-center">
            <div className="m-8">
                <img src="index"></img>
            </div>
            <nav>
                <ul className="flex p-0 m-0 mt-3 list-none 
                maxW:fixed left-[30%] maxW:bg-primary maxW:flex-col maxW:h-full maxW:w-full">
                    <li className="maxW:text-left maxW:ml-6">
                        <a href="index.html">
                            <span aria-hidden="true" className="font-bold">00</span> Home
                        </a>
                    </li>
                    <li className="maxW:text-left maxW:ml-6">
                        <a href="destination.html">
                            <span aria-hidden="true" className="font-bold">01</span> Destination
                        </a>            
                    </li>
                    <li className="maxW:text-left maxW:ml-6">
                        <a href="crew.html">
                            <span aria-hidden="true" className="font-bold">02</span> Crew
                        </a>            
                    </li>
                    <li className="maxW:text-left maxW:ml-6">
                        <a href="technology.html">
                            <span aria-hidden="true" className="font-bold">03</span> Technology
                        </a>            
                    </li>
                </ul>
            </nav>
        </header>
    )
} 

export default Navbar2