import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';
import logo from '../public/hood-logo.jpg';

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return(
        <div className="w-screen h-[80px] z-10 bg-gray-900 fixed drop-shadow-lg font-body text-primary">
            <div className="flex items-center justify-between w-full h-full px-2 ">
                <div className="flex items-center">
                    <h1 className=" border-primary border-4 py-3 p-x-[1em] m-3 rounded-xl px-5 text-3xl font-extrabold sm:text-4xl text-shadow-bluehover:bg-primary hover:shadow-brightGlow">Austin Hood</h1>
                </div>
                <div className="hidden md:flex font-alt">
                    <div class="nav">
                        <ul className="float-right text-xl font-extrabold md:flex">
                            <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                            hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">About</li>
                            <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                            hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Projects</li>
                            <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                            hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Work</li>
                            <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                            hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Contact</li>
                            <div class="resumeButton">
                                <li className="float-right p-4 px-8 py-4 m-3 text-3xl transition-opacity border-4 md:flex text-vice border-vice shadow-pinkGlow text-shadow-pink rounded-xl hover:bg-vice hover:text-gray-900 hover:shadow-brightPinkGlow">Resume</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='border-2 md:hidden hover:bg-vice hover:text-gray-900 hover:shadow-brightPinkGlow rounded-xl' onClick={handleClick}>
                    <div class='hamburgerMenu'>
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