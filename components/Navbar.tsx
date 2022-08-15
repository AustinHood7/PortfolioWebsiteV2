import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <div className="w-screen h-[80px] z-10 bg bg-zinc-200 fixed drop-shadow-lg font-body">
            <div className="flex items-center justify-between w-full h-full px-2 ">
                <div className="flex items-center">
                    <h1 className="px-10 mr-4 text-3xl font-bold sm:text-4xl">Austin Hood</h1>
                </div>
                <div className="hidden md:flex font-body">
                    <ul className="float-right md:flex margin ">
                        <li className="hover:bg-zinc-600">About</li>
                        <li className="hover:bg-zinc-600">Projects</li>
                        <li className="hover:bg-zinc-600">Work</li>
                        <li className="hover:bg-zinc-600">Contact</li>
                        <li className="px-10 hover:bg-zinc-600">Resume</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar