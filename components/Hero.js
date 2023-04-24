import Image from "next/image"
import Link from "next/link";

const Hero = () => {
    const NavMenu = [{
        "title": "Home",
        "link": "/"
    },
    {
        "title": "About Me",
        "link": "/about-me"
    },
    {
        "title": "Projects",
        "link": "/projects"
    }];
    return (
        <div className=" container flex flex-col mx-auto gap-7 mt-6 ">
            <div className="flex flex-row justify-between">
                <div><Image src={`https://img.icons8.com/ios-filled/100/logo.png`} alt="hero" width={`100`} height={`100`} /></div>
                <div className="flex flex-row justify-between mx-auto space-x-3">
                    {NavMenu && NavMenu.map((value, index) => (
                        <Link href={value.link}>{value.title}</Link>
                    )
                    )}
                </div>
                <div><span>Search</span></div>
            </div>
            <div className="flex flex-row justify-between mt-20 p-2">
                {/* UI Description */}
                <div className="flex flex-col space-y-20 w-[60%]">
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col ">
                            <span className="font-bold text-[50px]">FirstName LastName</span>
                            <span className="text-[50px]">UI/UX Developer</span>
                        </div>
                        <span><Image src={`https://em-content.zobj.net/thumbs/120/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png`} alt="emoji_wave" width={70} height={70} /></span>
                    </div>
                    <div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                    </div>
                    <div className="flex flex-row w-full gap-5">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">Connect Button</button>
                        <div className="flex flex-row justify-between gap-5">
                            <span>LinkedIn</span>
                            <span>Facebook</span>
                            <span>Behance</span>
                        </div>
                    </div>
                </div>
                {/* UI Profile Photo */}

                <div className="flex flex-row w-[40%]">
                    <Image src={`https://unsplash.com/photos/hl_tbLIqQIA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzV8fG1vZGVscyUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8fHwxNjgyMzYwODcz&force=true&w=640`} width={640} height={640} alt="image" className="rounded-full w-full h-full" />
                </div>

            </div>
        </div>
    )
}

export default Hero