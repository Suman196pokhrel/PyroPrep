import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";




const navItems = [
    {
        title: "Home",
        link: "/dashboard"
    },
    {
        title: "Resources",
        link: "/resources"
    },
    {
        title: "Compete",
        link: "/compete"
    },
    {
        title: "Leaderboard",
        link: "/leaderboard"
    },
]


const DashNavbar = () => {
    return (
        <nav className='w-full bg-[#00AB55]  bg-opacity-10 px-3 py-1 text-sm flex items-center justify-between'>


            {/* LEFT  */}
            <div className='flex gap-10 items-center'>
                <figure>
                    <Image src={"/static/logo.png"} alt='' width={40} height={40} />
                </figure>

                {/* NAV ITEMS  */}
                <ul className='flex items-center gap-10 text-[#005249] '>
                    {navItems.map((items, index) => (
                        <li key={index} className=' font-medium'>
                            <Link href={items.link}>
                                {items.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>


            {/* RIGHT  */}
            <div className='flex items-center gap-5 text-2xl font-bold text-[#227a38b6]'>
                <IoIosNotifications className=' cursor-pointer' />
                <RxAvatar />
            </div>

        </nav>
    )
}

export default DashNavbar