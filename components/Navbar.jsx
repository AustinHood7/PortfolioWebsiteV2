import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className="w-screen h-[80px] z-10 bg-gray-900 fixed 
        font-body text-primary bg-opacity-5">
            <div className="flex items-center justify-between w-full h-full px-2 text-2xl">
                <div className="flex items-center ml-[2.5rem]">
                    <img src="hoodLogo65.png"></img>
                </div>
                <div className="hidden md:flex font-body">
                    <div className="nav">
                        <ul className="float-right font-extrabold md:flex border-0 bg-primary rounded-l-full backdrop-blur-[1rem] bg-opacity-10 items-center">
                            <li className="mx-1 my-2 border-0 rounded-full hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">00. 
                            <span className="text-sky-200"> About</span></li>
                            <li className="mx-1 my-2 border-0 rounded-full hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">01. 
                            <span className="text-sky-200"> Projects</span></li>
                            <li className="mx-1 my-2 border-0 rounded-full hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">02. 
                            <span className="text-sky-200"> Work</span></li>
                            <li className="mx-1 my-2 border-0 rounded-full hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">03. 
                            <span className="text-sky-200"> Contact</span></li>
                            <div className="resumeButton">
                                <li className="float-right px-8 mr-4 text-4xl transition-opacity border-0 rounded-full bg-vice bg-opacity-30 md:flex text-vice hover:bg-vice hover:text-gray-900 hover:shadow-brightPinkGlow">Resume</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='mr-6 border-2 border-vice md:hidden hover:bg-vice hover:text-gray-900 hover:shadow-brightPinkGlow rounded-xl' onClick={handleClick}>
                    <div className='hamburgerMenu'>
                        {!nav ? <MenuIcon className='w-10 text-vice hover:text-gray-900'/> : <XIcon className="w-10 text-vice hover:text-gray-900"/>}
                    </div>
                </div>
            </div>

            <ul className={!nav ? 'hidden' : "grid float-right w-full bg-gray-900 font-alt font-bold md:hidden"}>
                <li className="w-full mt-4 text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Home</li>
                <li className="w-full text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-800 hover:shadow-brightGlow">Projects</li>
                <li className="w-full text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-800 hover:shadow-brightGlow">Work</li>
                <li className="w-full text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-800 hover:shadow-brightGlow">Contact</li>
            </ul>
        </div>
    )
} 

export default Navbar