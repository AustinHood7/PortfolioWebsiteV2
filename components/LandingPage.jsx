import Image from 'next/image';
import whale from '../public/whale.png'
import { motion } from 'framer-motion';
import ParticlesComponent from './particlesComponent';

const LandingPage = () => {
    return (
        <motion.div className="flex justify-center w-full min-h-[100%] " id='home' initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
            <ParticlesComponent />
            <div className="maxSm:mt-10 md:max-w-[50vw] mt-[20vh] pl-[2rem] flex-col flex md:ml-[15vw] maxSm:max-w-[80vw] font-body md:translate-x-[5vw] maxSm:p-5 rounded-xl border-0 backdrop-blur-[.2rem] relative z-10">
                <p className="py-2 my-2 mt-8 text-lg text-sky-200">Hi, my name is </p>
                <h1 className="py-2 font-bold text-8xl font-body text-primary text-shadow-white">Austin Hood</h1>
                <p className="py-3 my-2 text-6xl font-bold text-gray-400">I make software for the web. </p>
                <p className="py-3 text-gray-400 font-rob md:max-w-[25vw] text-lg">
                I am a Software Engineer with a specialized focus on web development and design, and a recent graduate in Software Engineering. 
                My passion lies in crafting impactful web applications to better the lives of others. Currently I am focused on working on my craft and finding new and exciting 
                opportunites to grow as an engineer.
                </p>
            </div>
            <div className='mt-[40vh] maxSm:hidden translate-x-[-10vw] relative z-10'>
                <Image
                    src={whale}
                    alt="Hood"
                    width="600px"
                    height="600px"
                />
            </div>
        </motion.div>
    )
}

export default LandingPage