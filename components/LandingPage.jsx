import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const LandingPage = () => {
    return (
        <div className="grid w-full h-screen bg-gray-900 grid-cols-custom">
            <div className="max-w-full col-span-3 col-start-2 pl-[4rem] m-auto mt-[10rem] sm:grid-cols-2">
                <p className="py-5 my-2 text-2xl font-body text-sky-200">Hi, my name is </p>
                <h1 className="py-5 font-body text-primary text-8xl md:flex text-shadow-blue">Austin Hood</h1>
                <p className="py-5 my-2 text-6xl font-extrabold font-body text-vice">I make software for the web. </p>
                <p className="pr-[32.5rem] py-5 font-rob text-sky-200">
                    I’m a senior Software Engineering student who specializes in building and designing web applications. 
                    Right now, I’m focused on building a social networking platform for stock trading at 
                    <span className="text-primary text-shadow-blue"> SoleIndustries.com</span>
                </p>
            </div>
        </div>
    )
}

export default LandingPage