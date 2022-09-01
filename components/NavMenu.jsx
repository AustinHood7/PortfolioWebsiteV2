import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const NavMenu = () => {
    return (
        <div className="grid w-full h-screen bg-gray-900 grid-cols-custom">
            <div className="fixed top-[75%] left-10 text-primary">
                <a href="https://github.com/AustinHood7">
                    <div className="pb-3">
                        <img src="resume.png" alt="This is resume"></img>
                    </div>
                </a>
                <a href="https://github.com/AustinHood7">
                    <div className="pb-3">
                        <img src="github.png" alt="This is github"></img>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/austin-hood7/">
                    <div className="pb-2">
                        <img src="linkedin.png" alt="This is github"></img>
                    </div>
                </a>
                <div className="h-[100px] border-l-[.2rem] border-primary ml-[21.8px]"></div>
            </div>
        </div>
    )
}

export default NavMenu