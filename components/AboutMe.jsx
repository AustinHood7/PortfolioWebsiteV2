import React from "react";
import Image from 'next/image';
import me from '../public/me.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AboutMe = () => {

    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Only trigger this effect once
        threshold: 0.1     // Percentage of element in viewport to trigger animation
      });

    return (
        <div className="flex flex-col bg-gray-900 text-sky-200 md:pb-[10vh] items-center">
            <div className="flex items-center justify-center mt-[10vh] md:mr-[25vw]">
                <div className="mr-5 text-5xl text-center transition-all duration-200 text-primary text-shadow-white" id="about">00. <span className="text-sky-200">About </span></div>
                <hr className="border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2 w-[15vw] mt-2 maxSm:w-[20vw]"></hr>
            </div>
            <motion.div className="flex maxSm:flex-col mt-10 justify-evenly maxSm:items-center relative z-10 border-0 rounded-xl bg-opacity-0 backdrop-blur-[.2rem] gap-16" ref={inViewRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 2 }}>
                <div className="md:max-w-[30vw] maxSm:px-[15vw]">
                    <div className="text-lg text-gray-400 font-rob">Hello! My name is Austin and I love to create things I can share with everybody on the web. 
                    I started in web development my sophmore year of school at Florida Gulf Coast University. It started with just simple CSS designs and eventually has blossomed
                    into comprehensive full-stack applications that can benefit individuals from around the world. </div>

                    <div className="mt-10 text-lg text-gray-400 font-rob">Right now, I am looking for new and exciting opportunities to grow as an engineer, recently this has been building both professional and personal software.
                    When I am not studying new frameworks and design principals, I am working at my internship <a href="https://mental-health-and-you-five.vercel.app/" className="text-primary">Mental Health & You</a>,
                    on a freelancing project,<a href="" className="text-primary"> The Social Market</a>, or any of my personal projects. I strive to create software that can make an impact, from things as small as designing characters for a Dungeons and Dragons campaign, 
                    to connecting patients to couselors with an online web applcation.</div>

                    <div className="mt-10 text-lg text-gray-400 font-rob">Here are some of the technologies I have been working with:</div>
                    <div className="flex justify-between mr-[25%] ml-[10%]">
                        <ul className="font-bold list-disc text-sky-100 text-shadow-white font-rob">
                            <li>Next.JS</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                        <ul className="font-bold list-disc text-sky-100 text-shadow-white font-rob">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                        </ul>
                        <ul className="font-bold list-disc text-sky-100 text-shadow-white font-rob">
                            <li>AWS</li>
                            <li>Vercel</li>
                            <li>tRPC</li>
                        </ul>
                    </div>

                </div>
                <div className="overflow-hidden border- rounded-xl border-primary h-[400px] w-[400px] mt-2">
                    <Image
                        src={me}
                        alt="Hood"
                        width="400px"
                        height="400px"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe