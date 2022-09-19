import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';
import jellyfish from '../public/jellyfish.png'
import me from '../public/me.jpg'


const AboutMe = () => {
    return (
        <div className="grid w-full h-screen grid-cols-5 grid-rows-6 bg-gray-900 text-sky-200">
            <div className="text-5xl col-start-2 text-center transition-all duration-200 text-primary mt-[10rem] text-shadow-white">00. <span className="text-sky-200">About </span></div>
            <hr className="col-start-3 row-start-2 mt-[35px] border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2"></hr>
            <span className="z-10 col-span-2 col-start-2 row-start-3 ml-10 text-gray-400 font-rob">Hello! My name is Austin and I like to create things I can share with everybody on the internet. 
            I started in web development my sophmore year of school at Florida Gulf Coast University. I began with simple but custom CSS designs that 
            I could use for my small web projects, it turns out it is something that has stuck with me and I have grown passionate about as I made have made my way through school. </span>

            <span className="z-10 col-span-2 col-start-2 row-start-4 ml-10 text-gray-400 font-rob">As of today, I have has only a couple times to express who I am as an 
            engineer by making a 2d slot machine game for CatStealers.com or doing Business Analysis for SoleIndustries.com. 
            Right now, if I am not studying I am working on various personal projects like a <span>stock analytics web app</span>
            or this very website! My main focus right now is to find new and exciting opportunites that will help me become the best engineer I can be.</span>

            <span className="z-10 col-span-2 col-start-2 row-start-5 ml-10 text-gray-400 font-rob">Here are some of the technologies I have been working with:</span>
            <div className="z-0 col-start-4 row-start-3 row-span-2 p-2 translate-x-[5rem] border-2 rounded-xl border-primary border-b-0">
                <Image
                    src={me}
                    alt="Hood"
                    width="2117px"
                    height="1787px"
                />
            </div>
        </div>
    )
}

export default AboutMe