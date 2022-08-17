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
                    <ul className="float-right md:flex">
                        <li className=" py-5 p-x-[1em] m-3 rounded-xl">About</li>
                        <li className=" py-5 p-x-[1em] m-3 rounded-xl">Projects</li>
                        <li className=" py-5 p-x-[1em] m-3 rounded-xl">Work</li>
                        <li className=" py-5 p-x-[1em] m-3 rounded-xl">Contact</li>
                        <li className="border-primary px-10 border-4 p-y-[.25em] p-x-[1em] m-3 rounded-xl">Resume</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar