import Image from 'next/image'
import React from 'react'
import { Separator } from '../atoms/separator'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { signIn } from "next-auth/react"


const loginOptions = [
    {
        title: "google",
        icon: FcGoogle,
        color: "",
        signInParams: "google"
    },
    {
        title: "facebook",
        icon: FaFacebookF,
        color: "text-blue-600",
        signInParams: "facebook"


    }

]


const Social = () => {
    return (
        <section className='flex flex-col w-full gap-3 xl:gap-10 pt-7'>
            <div className='flex flex-row w-full items-center justify-evenly gap-3 xl:gap-7'>
                {loginOptions.map((item, index) => (
                    <div key={index} onClick={() => signIn(item.signInParams)} className='flex items-center justify-center w-full h-14  border-2 bg-white xl:w-1/2 rounded-xl  cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all ease-linear'>
                        <item.icon className={` text-xl lg:text-2xl ${item.color}`} />
                    </div>
                ))}
            </div>

            {/* <div className='flex items-center justify-evenly overflow-hidden text-gray-500 text-sm xl:text-xl'>
                <Separator className='w-1/3' /> OR <Separator className='w-1/3' />
            </div> */}
        </section>
    )
}

export default Social