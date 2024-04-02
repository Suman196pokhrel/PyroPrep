"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown"
import { Button } from '../atoms/button';
import { signOut } from 'next-auth/react';
import { useSessionStore } from '@/lib/zustand/store';




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

    const clearUser = useSessionStore((state) => state.clearUser)

    const handleLogout = () => {
        clearUser()
        signOut()
    }


    return (
        <nav className='w-full bg-[#00AB55] hidden md:flex bg-opacity-10 px-3 py-1 text-sm  items-center justify-between'>


            {/* LEFT  */}
            <div className='flex gap-10 items-center'>
                <Link href={"/dashboard"}>
                    <figure>
                        <Image src={"/static/logo.png"} alt='' width={40} height={40} />
                    </figure>
                </Link>

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
            <div className='flex items-center gap-5 text-2xl font-bold text-[#557480]'>
                <DropdownMenu>
                    <DropdownMenuTrigger >
                        <IoIosNotifications className=' cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 ">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuSeparator />


                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger >
                        <RxAvatar className=' cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 ">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Button variant={"ghost"} onClick={handleLogout}>
                                Log out
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </nav>
    )
}

export default DashNavbar