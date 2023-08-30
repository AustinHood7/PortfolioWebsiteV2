import { motion } from 'framer-motion';
import ParticlesComponent from './particlesComponent';

const LandingPage = () => {
    return (
        <motion.div className="flex justify-center w-full min-h-[100%] px-" id='home' initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
            <ParticlesComponent />
            <div className="md:max-w-[50vw] pl-[2rem] flex-col flex maxSm:max-w-[80vw] font-body maxSm:p-5 rounded-xl border-0 backdrop-blur-[.2rem] relative z-10 h-[100vh] justify-center md:mr-[10vw]">
                <p className="text-lg text-sky-200">Hello, my name is </p>
                <h1 className="py-4 font-bold text-8xl font-body text-primary text-shadow-white">Austin Hood</h1>
                <p className="py-4 my-2 text-6xl font-bold text-gray-400">I make software for the web. </p>
                <p className="py-4 text-gray-400 font-rob md:max-w-[25vw] text-lg">
                I am a Software Engineer with a love for web projects, and a recent graduate in Software Engineering. 
                My passion lies in crafting impactful web applications to better the lives of others. Currently I am focused on working on my craft and finding new, exciting 
                opportunites to grow as an engineer.
                </p>
            </div>
            
        </motion.div>
    )
}

export default LandingPage