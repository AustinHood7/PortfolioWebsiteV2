
const LandingPage = () => {
    return (
        <div className="grid w-full h-screen bg-gray-900 grid-cols-custom">
            <div className="max-w-full col-span-3 col-start-2 pl-[2rem] m-auto mt-[12rem] sm:grid-cols-2">
                <p className="py-2 my-2 mt-8 text-lg font-body text-primary">Hi, my name is </p>
                <h1 className="py-2 font-bold text-8xl font-body text-sky-300 md:flex text-shadow-white">Austin Hood</h1>
                <p className="py-5 my-2 text-6xl font-bold text-gray-400 font-body">I make software for the web. </p>
                <p className="pr-[26rem] py-5 font-rob text-gray-400">
                    I’m a senior Software Engineering student who specializes in building and designing web applications. 
                    Right now, I’m focused on building a social networking platform for stock trading at 
                    <span className="text-primary text-shadow-blue"> SoleIndustries.com</span>
                </p>
            </div>
            <span className="col-span-2 mt-[17rem] z-0 translate-x-[-8%] hidden md:block"><img src="whale.png" className="z-0"></img></span>
            <span className="col-start-4 translate-y-[-50%] translate-x-[-35%] scale-[.3]"><img src="arrow2.png"></img></span>
        </div>
    )
}

export default LandingPage