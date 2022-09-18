import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const AboutMe = () => {
    return (
        <div className="grid w-full h-screen grid-cols-5 bg-gray-900 text-sky-200">
            <div className="col-start-1 col-span-5 text-4xl font-bold text-center transition-all duration-200 text-primary mt-[10rem]">00. About me<hr className="col-span-2 col-start-4"></hr>
</div>
            <span className="col-span-3 col-start-2">I am a software engineering student at FGCU looking for any opportunity to help me grow to be the enginner I have always dreamed of being</span>

        </div>
    )
}

export default AboutMe