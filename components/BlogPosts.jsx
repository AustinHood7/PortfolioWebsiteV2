import Image from 'next/image';
import centz1 from '../public/centz1.png'
import sm from '../public/the-social-market.png'
import {FaArrowRight} from 'react-icons/fa' 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const BlogPosts = () => {

    const [currentDiv, setCurrentDiv] = useState(1);
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    const slideInFromLeftVariants = {
        hidden: { x: "-100vw" },  // start from the left outside of the view
        visible: {
          x: 0,                   // end at the original position
          transition: {
            type: "spring",
            stiffness: 60,
            damping: 20
          }
        },
        exit: { x: "-100vw" }     // if you want to animate it out to the left again on exit
      };

    function scrollToProjects() {
        if (!isBrowser()) return;
        var e = document.getElementById("blogs");
        e.scrollIntoView({
            behavior: "smooth"
          }); // Makes the element 
    }

    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Only trigger this effect once
        threshold: 0.1     // Percentage of element in viewport to trigger animation
      });

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-sky-200 md:pb-[10vh] relative z-10 border-0 rounded-xl bg-opacity-0 backdrop-blur-[.2rem] mx-[15vw]">
            <div className="flex items-center justify-center mt-[10vh] md:mr-[25vw]">
                <div className="mr-5 text-5xl text-center transition-all duration-200 text-primary text-shadow-white" id='blogs'>03. <span className="text-sky-200">Blog Posts</span></div>
                <hr className="border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2 w-[15vw] mt-2 maxSm:w-[20vw]"></hr>
            </div>
            
            <motion.div className='flex'
            ref={inViewRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 2 }}>

                <div className='max-w-[75vw] relative z-10 mt-16 mx-10'>
                    <AnimatePresence>
                        {currentDiv === 1 && (  
                            <motion.div className='flex gap-16 justify-center'
                            ref={inViewRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 2 }}>
                                <div className='max-w-[25%] flex flex-col items-center'>
                                    <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>tRPC w/ Next.JS</h1>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[175px] w-[350px]'>
                                        <a href='https://medium.com/@AustinMHood/trpc-with-next-js-14425e130d47' target="_blank" rel="noopener noreferrer" className=''>
                                            <Image 
                                                src="/tRPC1.png"
                                                alt="tRPC"
                                                width="350px"
                                                height="175px"
                                                
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 text-lg mt-8'>
                                    Dive into a comprehensive guide on utilizing tRPC for full-stack type safety. I've distilled the documentation to its essence, making tRPC more approachable and user-friendly for developers.
                                    </div>
                                </div>
                                <div className='max-w-[25%] flex flex-col items-center'>
                                    <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>tsParticles w/ React</h1>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[175px] w-[350px]'>
                                        <a href='https://medium.com/@AustinMHood/tsparticles-in-react-js-157d10adc8a8' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src="/tsParticles.png"
                                                alt="tsParticles"
                                                width="350px"
                                                height="175px"
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 text-lg mt-8'>
                                    Discover a streamlined guide to seamlessly integrate the tsParticles library with React, ensuring it coexists harmoniously with other page elements. This resource addresses and resolves many initial challenges I faced when delving into the library.
                                    </div>
                                </div>
                                <div className='max-w-[25%] flex flex-col items-center'>
                                    <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>Dalle w/ Next.js</h1>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[175px] w-[350px]'>
                                        <a href='https://medium.com/@AustinMHood/dalle-w-next-js-7ac753ee92c6' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src="/dalle.png"
                                                alt="dalle"
                                                width="350px"
                                                height="175px"
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 text-lg mt-8'>
                                    I've crafted a guide detailing my journey with the Dalle API, focusing on effective and secure usage. This guide is designed to assist developers in harnessing the power of AI through REST APIs while emphasizing the importance of .env files to guard their API keys.
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {currentDiv === 2 && (  
                            <motion.div className='flex gap-16 justify-evenly'
                            ref={inViewRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 2 }}>
                                <div className='max-w-[25%] flex flex-col items-center'>
                                    <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>pnpm vs npm</h1>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[175px] w-[350px]'>
                                        <a href='https://medium.com/@AustinMHood/pnpm-vs-npm-6a4d2e5fd94' target="_blank" rel="noopener noreferrer" className=''>
                                            <Image 
                                                src="/pnpm.png"
                                                alt="pnpm"
                                                width="350px"
                                                height="175px"
                                                
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 text-lg mt-8'>
                                    Explore a detailed comparison between pnpm and npm, delving into their use cases and benefits. This guide is crafted to enlighten both budding and seasoned developers about emerging package managers and their potential advantages.
                                    </div>
                                </div>
                                <div className='max-w-[25%] flex flex-col items-center'>
                                    <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>Feature Branch Workflow</h1>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[175px] w-[350px]'>
                                        <a href='https://medium.com/@AustinMHood/feature-branch-workflow-d60872290c8b' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src="/git.png"
                                                alt="git"
                                                width="350px"
                                                height="175px"
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 text-lg mt-8'>
                                    Delve into an insightful overview of the feature branch workflow, underscoring its mechanics and the specific scenarios where it shines.
                                    </div>
                                </div>
                                
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="relative z-10 justify-center flex items-center cursor-pointer translate-x-[-3rem]" onClick={() => {setCurrentDiv(prev => (prev === 1 ? 2 : 1));scrollToProjects();}}>
                    <FaArrowRight color='#04d9ff' size={45}/>
                </div>
            </motion.div>
        </div>
    )
}

export default BlogPosts