import Image from 'next/image';
import whale from '../public/whale.png'

const LandingPage = () => {
    return (
        <div className="flex justify-center w-full min-h-[100%] bg-gray-900 " id='home'>
            <div className="maxSm:mt-10 md:max-w-[50vw] mt-[20vh] pl-[2rem] flex-col flex md:ml-[15vw] maxSm:max-w-[80vw] backdrop-blur-[1rem] bg-opacity-0 font-body md:translate-x-[5vw] maxSm:p-5">
                <p className="py-2 my-2 mt-8 text-lg text-sky-200">Hi, my name is </p>
                <h1 className="py-2 font-bold text-8xl font-body text-primary text-shadow-white">Austin Hood</h1>
                <p className="py-3 my-2 text-6xl font-bold text-gray-400">I make software for the web. </p>
                <p className="py-3 text-gray-400 font-rob md:max-w-[25vw] text-lg">
                    I’m a senior Software Engineering student who specializes in building and designing web applications. 
                    Right now, I am focusing on becoming a front-end developer and finding new opportunities to become a more 
                    effective software engineer.
                </p>
            </div>
            <div className='mt-[40vh] maxSm:hidden translate-x-[-10vw]'>
                <Image
                    src={whale}
                    alt="Hood"
                    width="600px"
                    height="600px"
                />
            </div>
        </div>
    )
}

export default LandingPage