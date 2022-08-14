import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <div className="w-screen h-[80px] z-10 bg bg-zinc-200 fixed drop-shadow-lg">
            <div className="flex items-center justify-between w-full h-full px-2 ">
                <div className="flex items-center">
                    <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Austin Hood</h1>
                    
                </div>
                <div className="hidden md:flex">
                    <ul className="float-right md:flex margin">
                        <li>About</li>
                        <li>Projects</li>
                        <li>Work</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar