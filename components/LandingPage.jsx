import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const LandingPage = () => {
    return (
        <div className="flex flex-col justify-between w-full h-screen bg-gray-800">
            <div className="grid md:grid-cols-2 max-w-[1240] m-auto">
                <div className="flex flex-col justify-center w-full px-2 py-4 md:items-start">
                    <p className="text-vice">Hello, my name is </p>
                    <h1 className="text-primary">Austin Hood</h1>
                    <p>This is our tech brand.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage