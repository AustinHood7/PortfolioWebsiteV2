import React, {useState} from "react";
import Image from 'next/image';
import envelope from '../public/envelope-50.png'

const VerticalEmail = () => {
    return (
        <div className="fixed top-[83%] right-[3%] text-primary z-10">
                <a className="mailto" href="mailto:austinmhood@live.com">                    
                    <Image
                        src={envelope}
                        alt="Envelope"
                        width="50px"
                        height="50px"
                    />
                </a>
            <div className="mt-2 h-[150px] border-l-[.15rem] border-zinc-200 ml-[24px]"></div>
        </div>
    )
}

export default VerticalEmail