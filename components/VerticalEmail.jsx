import Link from "next/link";
import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image';

const VerticalEmail = () => {
    return (
        <div className="fixed top-[83%] right-[3%] text-primary ">
                <a class="mailto" href="mailto:austinmhood@live.com">                    
                    <img src="envelope-50.png" alt="This is resume"></img>
                </a>
            <div className="mt-2 h-[150px] border-l-[.15rem] border-zinc-200 ml-[24px]"></div>
        </div>
    )
}

export default VerticalEmail