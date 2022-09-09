import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const NavMenu = () => {
    return (
        <div className="fixed top-[75%] left-[3%] text-primary">
            <a href="https://github.com/AustinHood7">
                <div className="pb-3">
                    <img src="resume-35.png" alt="This is resume"></img>
                </div>
            </a>
            <a href="https://github.com/AustinHood7">
                <div className="pb-3">
                    <img src="github-35.png" alt="This is github"></img>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/austin-hood7/">
                <div className="pb-2">
                    <img src="linkedin-35.png" alt="This is github"></img>
                </div>
            </a>
            <div className="h-[150px] border-l-[.15rem] border-zinc-200 ml-[14.3px]"></div>
        </div>
    )
}

export default NavMenu