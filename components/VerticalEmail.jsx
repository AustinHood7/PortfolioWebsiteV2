import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const VerticalEmail = () => {
    return (
        <div className="fixed top-[83%] right-[3%] text-primary">
            <a href="https://github.com/AustinHood7">
                <div className="pb-3">
                    <img src="icons8-circled-envelope-50 (1).png" alt="This is resume"></img>
                </div>
            </a>
            <div className="h-[150px] border-l-[.15rem] border-zinc-200 ml-[25px]"></div>
        </div>
    )
}

export default VerticalEmail