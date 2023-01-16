import React, {useState} from "react";
import Image from 'next/image';
import resume from '../public/resume-35.png'
import github from '../public/github-35.png'
import linkedin from '../public/linkedin-35.png'

const NavMenu = () => {
    return (
        <div className="fixed top-[75%] left-[3%] text-primary z-10">
            <a href={'https://software-resume.tiiny.site/'}  target="_blank" rel="noreferrer">
                <div className="pb-3">
                    <Image
                        src={resume}
                        alt="resume"
                        width="35px"
                        height="35px"
                    />
                </div>
            </a>
            <a href="https://github.com/AustinHood7">
                <div className="pb-3">
                    <Image
                        src={github}
                        alt="github"
                        width="35px"
                        height="35px"
                    />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/austin-hood7/">
                <div className="pb-2">
                    <Image
                        src={linkedin}
                        alt="linkedin"
                        width="35px"
                        height="35px"
                    />
                </div>
            </a>
            <div className="h-[150px] border-l-[.15rem] border-zinc-200 ml-[14.3px]"></div>
        </div>
    )
}

export default NavMenu