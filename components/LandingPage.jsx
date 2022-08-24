import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const LandingPage = () => {
    return (
        <div className="flex justify-between w-full h-screen bg-gray-900">
            <div className="grid max-w-full m-auto sm:grid-cols-2">
                <div className="flex flex-col justify-center w-full px-2 py-4">
                    <p className="my-2 text-3xl font-bold font-body text-vice">Hi, my name is </p>
                    <h1 className="p-5 font-body text-primary text-8xl md:flex text-shadow-blue">Austin Hood</h1>
                    <p className="my-2 text-4xl font-extrabold font-alt text-sky-200">I make software for the web. </p>
                    <p className="font-extrabold font font-alt text-sky-200">
                        I’m a senior Software Engineering student who specializes in building and designing web applications. 
                        Right now, I’m focused on building a web based social networking platform for stock trading at soleindustries
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage