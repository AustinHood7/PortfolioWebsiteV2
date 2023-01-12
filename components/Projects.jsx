import Image from 'next/image';
import centz from '../public/centz.png'

const Projects = () => {
    return (
        <div className="flex flex-col bg-gray-900 text-sky-200 justify-center items-center">
            <div className="flex items-center justify-center mt-[10vh] md:mr-[25vw]">
                <div className="mr-5 text-5xl text-center transition-all duration-200 text-primary text-shadow-white">01. <span className="text-sky-200">Projects </span></div>
                <hr className="border-primary border-[.15rem] rounded-lg shadow-blueGlow bg-sky-300 ml-2 w-[15vw] mt-2 maxSm:w-[20vw]"></hr>
            </div>
            <div className='max-w-[75vw]'>
                <div className='flex justify-center my-12 items-center gap-x-[5em]'>
                    <div className='text-rob text-gray-400 max-w-[30vw]'>
                        <h1 className='text-2xl text-sky-100 text-shadow-white text-center mb-5'>Centz</h1>
                        This is a project I began making for a school project. I wanted more experience
                        using different frameworks and backends. This one specifically used react/flask. 
                        I also wanted to create a web application 
                        instead of a static website to work with more dynamic data. This was also collaborative
                        with a team of 3 so it helped become much more experienced with CI/CD pipelines and 
                        streamlined development using git.
                    </div>
                    <div className='overflow-hidden border-2 rounded-xl border-primary h-[169px] mt-10'>
                        <Image 
                            src={centz}
                            alt="centz"
                            width="300px"
                            height="169px"
                        />
                    </div>
                </div>
                <div className='flex justify-center my-12 items-center gap-x-[5em]'>
                    <div className='overflow-hidden border-2 rounded-xl border-primary h-[169px] mt-10 ml-[2rem]'>
                        <Image 
                            src={centz}
                            alt="centz"
                            width="300px"
                            height="169px"
                        />
                    </div>
                    <div className='text-rob text-gray-400 max-w-[30vw]'>
                        <h1 className='text-2xl text-sky-100 text-shadow-white text-center mb-5'>The Social Market</h1>
                        This is a freelancing project that I am working on for more professional experience. This 
                        project showed me how to work with multiple stakeholders and meet their needs. I gained more 
                        insight into why we follow ES guidelines for a more professional deliverable. Next.js was used
                        for this project to take advantage of SSR and fast load times. Tailwind was what I used to design
                        the layouts for a more streamlined development experience.
                    </div>
                </div>
                <div className='flex justify-center my-12 items-center gap-x-[5em]'>
                    <div className='text-rob text-gray-400 max-w-[30vw]'>
                        <h1 className='text-2xl text-sky-100 text-shadow-white text-center mb-5'>Portfolio Website</h1>
                        This website was made to display information about my coding process and compile all of my work
                        into one place. It was also my introduction to tools like Next.js and tailwind and helped shape
                        that stack I use for my personal projects. My understanding of design and dark-modes was greatly
                        improved during the process of writing this website. It also helped me to think more about the 
                        performance of websites that I am working on. 
                    </div>
                    <div className='overflow-hidden border-2 rounded-xl border-primary h-[169px] mt-10'>
                        <Image 
                            src={centz}
                            alt="centz"
                            width="300px"
                            height="169px"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects