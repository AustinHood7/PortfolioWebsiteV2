import Image from 'next/image';
import centz1 from '../public/centz1.png'
import sm from '../public/the-social-market.png'
import web from '../public/web.png'
import {FaArrowRight} from 'react-icons/fa' 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const Projects = () => {

    const [currentDiv, setCurrentDiv] = useState(1);

    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-sky-200 md:pb-[10vh]">
            <div className="flex items-center justify-center mt-[10vh] md:mr-[25vw]">
                <div className="mr-5 text-5xl text-center transition-all duration-200 text-primary text-shadow-white" id='projects'>01. <span className="text-sky-200">Projects </span></div>
                <hr className="border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2 w-[15vw] mt-2 maxSm:w-[20vw]"></hr>
            </div>
            <div className='flex'>

                <div className='max-w-[75vw]'>
                    <AnimatePresence>
                        {currentDiv === 1 && (  
                            <motion.div className=''
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0}}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}>
                                                                <div className='flex maxSm:flex-col-reverse justify-center my-12 items-center gap-x-[5em]'>
                                    <div className='text-rob text-gray-400 md:max-w-[30vw] text-lg'>
                                        <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>The Social Market</h1>
                                        This is a showcase website designed to captivate stakeholders and spark intrigue for a novel social networking site, &quot;The Social Market&quot;. 
                                        Constructed with Next.js, TailwindCSS, and an animation library, all hosted on Vercel. 
                                        This project was crafted as a professional freelancing endeavor to meet the precise needs of my client.
                                    </div>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[225px]'>
                                        <a href='https://social-market.vercel.app/' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src={sm}
                                                alt="centz"
                                                width="400px"
                                                height="225px"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className='flex maxSm:flex-col justify-center my-12 items-center gap-x-[5em]'>
                                <div className='overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[225px] mt-10'>
                                        <a href='https://mental-health-and-you-five.vercel.app/' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src="/mental-health.png"
                                                alt="centz1"
                                                width="400px"
                                                height="225px"
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 md:max-w-[30vw] text-lg'>
                                        <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>Mental Health & You</h1>
                                        This platform is built leveraging advanced technologies: Next.js, TailwindCSS, and specialized animation libraries. 
                                        Rather than just designing, my primary responsibility was implementing the user interface according to a provided UI mockup. 
                                        For a dependable and efficient user experience, we&apos;ve hosted the platform on AWS Amplify. During my internship, I played a pivotal 
                                        role in developing the Patient-Counselor Connection Platform, a web-based solution designed to seamlessly link patients with counselors. 
                                    </div>
                                    
                                </div>
                                <div className='justify-center my-12 items-center gap-x-[5em] md:flex'>
                                    <div className='text-rob text-gray-400 md:max-w-[30vw] text-lg'>
                                        <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>Centz</h1>
                                        Centz is a modern crypto tracking web application, designed to provide users with a pulse on the latest trends in the cryptocurrency market. 
                                        Created with a React front-end and a Flask back-end, it employs a decoupled architecture for flexibility and error protection. 
                                        To ensure a seamless user experience, Centz is hosted on Heroku, powered by Gunicorn.
                                    </div>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[225px]'>
                                        <a href='https://centz.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src={centz1}
                                                alt="centz"
                                                width="400px"
                                                height="225px"
                                            />
                                        </a>
                                    </div>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {currentDiv === 2 && (  
                            <motion.div className=''
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0}}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}>
                                <div className='justify-center my-12 items-center gap-x-[5em] md:flex'>
                                    <div className='text-rob text-gray-400 md:max-w-[30vw] text-lg'>
                                        <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>Dungeon Drawings</h1>
                                        Dungeon Drawings is a web application designed to empower users in crafting distinctive characters and images, utilizing AI. 
                                        This platform is built on the robust foundations of Next.js, TailwindCSS, tRPC, and Prisma. 
                                        Hosted on Vercel, Dungeon Drawings taps into the transformative power of the Dalle API by OpenAI, 
                                        creating an interface for AI-assisted creativity
                                    </div>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[225px]'>
                                        <a href='https://dungeon-drawings.vercel.app/' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src='/dungeon-drawings.png'
                                                alt="centz"
                                                width="400px"
                                                height="225px"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className='flex maxSm:flex-col-reverse justify-center my-12 items-center gap-x-[5em] '>
                                    <div className='mt-10 overflow-hidden border-0 rounded-xl hover:shadow-whiteGlow transition-all duration-300 h-[225px]'>
                                        <a href='https://t3-moon-data.vercel.app/' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src='/t3-moon-data.png'
                                                alt="centz"
                                                width="400px"
                                                height="225px"
                                            />
                                        </a>
                                    </div>
                                    <div className='text-rob text-gray-400 md:max-w-[30vw] text-lg'>
                                        <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>T3 Moon Data</h1>
                                        This is an application designed to demystify the current moon cycle and elucidate its significance. 
                                        While the core objective was to enrich my expertise in tRPC and backend API consumption, the project blossomed into a comprehensive tool. 
                                        Leveraging the T3 stack - consisting of Next.js, TailwindCSS, and tRPC - this application dynamically fetches and displays 
                                        moon data, adjusting its imagery in real-time based on the moon&apos;s current phase.
                                    </div>
                                </div>
                                <div className='flex maxSm:flex-col justify-center my-12 items-center gap-x-[5em]'>
                                    <div className='text-rob text-gray-400 md:max-w-[30vw] text-lg'>
                                        <h1 className='mb-5 text-2xl text-center text-sky-100 text-shadow-white'>Vite NBA</h1>
                                        Vite NBA is a streamlined web application dedicated to showcasing the latest game statistics of every NBA player from the Miami Heat. 
                                        With dynamic data fetching capabilities, it ensures that after every game, fans receive the most updated player stats. 
                                        This project was a deliberate exercise to hone my skills in front-end API consumption, emphasizing a relatively minimal toolset. 
                                        Crafted using the Vite build tool complemented by React and plain CSS, I undertook this project to gain a deeper appreciation for constructing applications without an abundance of tools, 
                                        getting back to the basics of React and CSS.
                                    </div>
                                    <div className='overflow-hidden border-0 rounded-xl mt-10 hover:shadow-whiteGlow transition-all duration-300 h-[225px]'>
                                        <a href='https://vite-nba.vercel.app/' target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src='/vite-nba.png'
                                                alt="centz1"
                                                width="400px"
                                                height="225px"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex justify-center mt-[46%] cursor-pointer translate-x-[4rem] " onClick={() => setCurrentDiv(prev => (prev === 1 ? 2 : 1))}>
                    <FaArrowRight color='#04d9ff' size={45}/>
                </div>
            </div>
        </div>
    )
}

export default Projects