import React from "react";
import Image from 'next/image';
import me from '../public/resumePhoto2Cropped.jpg'


const AboutMe = () => {
    return (
        <div className="flex flex-col bg-gray-900 text-sky-200">
            <div className="flex items-center justify-center mt-[10vh] md:mr-[25vw]">
                <div className="mr-5 text-5xl text-center transition-all duration-200 text-primary text-shadow-white">00. <span className="text-sky-200">About </span></div>
                <hr className="border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2 w-[15vw] mt-2 maxSm:w-[20vw]"></hr>
            </div>
            <div className="flex maxSm:flex-col mt-10 justify-evenly md:ml-[13vw] maxSm:items-center">
                <div className="md:max-w-[30vw] maxSm:px-[15vw]">
                    <div className="text-lg text-gray-400 font-rob">Hello! My name is Austin and I like to create things I can share with everybody on the internet. 
                    I started in web development my sophmore year of school at Florida Gulf Coast University. I began with simple but custom CSS designs that 
                    I could use for my small web projects, it turns out it is something that has stuck with me and I have grown passionate about as I made have made my way through school. </div>

                    <div className="mt-10 text-lg text-gray-400 font-rob">As of today, I am looking for new opportunities to learn more about front-end, some recent examples are 
                    building new web applications or professional static websites.
                    Right now, when I am not studying I am working on various personal projects like a <a href="https://centz.herokuapp.com/" className="text-primary">crypto analytics web app</a>,
                    <a href="" className="text-primary"> The Social Market</a>, or this very website! My main focus right now is to find new and exciting opportunites that will help me become the best engineer 
                    I can be.</div>

                    <div className="mt-10 text-lg text-gray-400 font-rob">Here are some of the technologies I have been working with:</div>
                    <div className="flex justify-between mr-[45%] ml-[10%]">
                        <ul className="font-bold list-disc text-sky-100 text-shadow-white font-rob">
                            <li>Next.JS</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                        <ul className="font-bold list-disc text-sky-100 text-shadow-white font-rob">
                            <li>JavaScript</li>
                            <li>C++</li>
                            <li>Python</li>
                        </ul>
                    </div>

                </div>
                <div className="overflow-hidden border-2 rounded-xl border-primary h-[300px] w-[300px] md:mr-[10vw] mt-10 md:translate-x-[-5vw]">
                    <Image
                        src={me}
                        alt="Hood"
                        width="300px"
                        height="300px"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe