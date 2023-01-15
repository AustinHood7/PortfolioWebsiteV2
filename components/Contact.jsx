import React from "react";
import github from '../public/github-35.png'
import envelope from '../public/envelope-50.png'
import linkedin from '../public/linkedin-35.png'

import Image from "next/image";

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-gray-900 text-sky-200">
                <div className="flex items-center justify-center mt-[10vh] md:mr-[25vw] pb-[4rem]">
                    <div className="mr-5 text-5xl text-center transition-all duration-200 text-primary text-shadow-white">02. <span className="text-sky-200">Contact </span></div>
                    <hr className="border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2 w-[15vw] mt-2 maxSm:w-[20vw]"></hr>
                </div>
                <div className="md:max-w-[30vw] md:mr-[25vw] text-lg text-gray-400">
                    I am currently looking for new and exciting opportunities as I am graduating this coming spring so my inbox is always open. If you have 
                    any questions or want to see any of my other projects use the links below to reach me. I would love to hear from you and I will do my best 
                    to get back to you.
                    <div className="flex justify-evenly mb-[10vh]">
                        <a href="https://github.com/AustinHood7">
                            <div className="flex items-center pb-3 mt-5">
                                <Image
                                    src={github}
                                    alt="resume"
                                    width="50px"
                                    height="50px"
                                />
                                <div className="ml-5 text-sky-100 text-shadow-white font-rob">
                                    Github
                                </div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/austin-hood7/">
                            <div className="flex items-center pb-3 mt-5 ">
                                <Image
                                    src={linkedin}
                                    alt="github"
                                    width="40px"
                                    height="40px"
                                />
                                <div className="ml-5 text-sky-100 text-shadow-white font-rob">
                                    Linkedin
                                </div>
                            </div>
                        </a>
                        <a className="mailto" href="mailto:austinmhood@live.com">
                            <div className="flex items-center pb-3 mt-5 ">
                                <Image
                                    src={envelope}
                                    alt="linkedin"
                                    width="50px"
                                    height="50px"
                                />
                                <div className="ml-5 text-sky-100 text-shadow-white font-rob">
                                    Email
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact