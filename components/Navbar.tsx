import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <div className="w-screen h-[80px] z-10 bg-gray-900 fixed drop-shadow-lg font-body text-primary">
            <div className="flex items-center justify-between w-full h-full px-2 ">
                <div className="flex items-center">
                    <h1 className="px-10 mr-4 text-3xl font-bold sm:text-4xl">Austin Hood</h1>
                </div>
                <div className="hidden md:flex font-body">
                    <ul className="float-right text-2xl font-extrabold md:flex">
                        <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                        hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">About</li>
                        <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                        hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Projects</li>
                        <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                        hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Work</li>
                        <li className="border-primary border-2 py-5 p-x-[1em] m-3 rounded-xl text-shadow-blue
                        hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Contact</li>
                        <li className="float-right p-4 px-8 py-4 m-3 text-3xl transition-opacity border-4 md:flex text-vice border-vice shadow-pinkGlow text-shadow-pink rounded-xl hover:bg-vice hover:text-gray-900 hover:shadow-brightPinkGlow">Resume</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar