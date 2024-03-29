import Image from 'next/image'
import React from 'react'
import { Separator } from '../atoms/separator'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const loginOptions = [
    {
        title: "google",
        icon: FcGoogle,
        color: ""
    },
    {
        title: "facebook",
        icon: FaFacebookF,
        color: "text-blue-600"
    },
    {
        title: "twitter (x)",
        icon: FaXTwitter,
        color: "text-black"
    }
]


const LoginMethods = () => {
    return (
        <section className='flex flex-col w-full gap-10'>
            <div className='flex items-center gap-7'>
                {loginOptions.map((item, index) => (
                    <div key={index} className='flex items-center justify-center py-4 border-2 bg-white w-1/3 rounded-xl  cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all ease-linear'>
                        <item.icon className={`text-2xl ${item.color}`} />
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-evenly overflow-hidden text-gray-500 text-xl'>
                <Separator className='w-1/3' /> OR <Separator className='w-1/3' />
            </div>
        </section>
    )
}

export default LoginMethods