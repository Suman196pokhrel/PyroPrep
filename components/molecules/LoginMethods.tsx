import Image from 'next/image'
import React from 'react'
import { Separator } from '../atoms/separator'

const loginOptions = [
    {
        title: "google",
        icon: "/static/icons/ic_google.png",
    },
    {
        title: "facebook",
        icon: "/static/icons/ic_facebook.png",
    },
    {
        title: "twitter (x)",
        icon: "/static/icons/ic_twitter.png",
    }
]


const LoginMethods = () => {
    return (
        <section className='flex flex-col w-full mt-14 gap-10'>
            <div className='flex items-center gap-7'>
                {loginOptions.map((item, index) => (
                    <div key={index} className='flex items-center justify-center py-4 border-2 drop-shadow-sm w-1/3 rounded-xl'>
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={40}
                            height={40}
                            className=''
                        />
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