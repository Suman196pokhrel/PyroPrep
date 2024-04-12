"use client"
import React, { useTransition } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { IconType } from 'react-icons';
import { MoonLoader } from 'react-spinners';

type SocialOption = {
    title: string
    icon: IconType
    color: string
    signInParams: "google" | "facebook"
}

const loginOptions: SocialOption[] = [
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


    const [isPending, startTransition] = useTransition()


    const onClickSignIn = (provider: SocialOption['signInParams']) => {

        startTransition(() => {
            signIn(
                provider, {
                callbackUrl: DEFAULT_LOGIN_REDIRECT
            }
            )
        })

    }

    return (
        <section className='flex flex-col w-full gap-3 xl:gap-10 pt-7'>
            <div className='flex flex-row w-full items-center justify-evenly gap-3 xl:gap-7'>
                {loginOptions.map((item, index) => (
                    <div key={index} onClick={() => onClickSignIn(item.signInParams)} className='flex items-center gap-5 justify-center w-full h-14  border-2 bg-white xl:w-1/2 rounded-xl  cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all ease-linear'>
                        {isPending && <MoonLoader size={20} />}
                        <item.icon className={` text-xl lg:text-2xl ${item.color}`} />
                    </div>
                ))}
            </div>


        </section >
    )
}

export default Social