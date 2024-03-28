"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type AuthLayoutProps = {
    children: React.ReactNode
}

type ConditionalData = {
    topRightLink: {
        title: string,
        content: string,
        link: string,
    },

    bannerData: {
        title: string,
        imageLink: string
    }
}



const AuthLayout = (
    {
        children
    }: AuthLayoutProps
) => {

    const currentPath = usePathname()
    const [conditionalData, setConditionalData] = useState<ConditionalData | null>(

    )


    // CONDITIONAL RENDERING OF TOP RIGHT LINK 
    useEffect(() => {
        if (currentPath === "/auth/signin") {
            setConditionalData({
                topRightLink: {
                    title: "Don't have an account ?",
                    content: "Get started",
                    link: "/auth/signup"
                },
                bannerData: {
                    title: "Hi, welcome to pyroprep",
                    imageLink: "/static/characters/character_01.png"
                }
            })
        } else {
            setConditionalData(
                {
                    topRightLink: {
                        title: "Already have an account ?",
                        content: "Login",
                        link: "/auth/signin"
                    },
                    bannerData: {
                        title: "Work smart & Ace your exams with Pyroprep.",
                        imageLink: "/static/characters/character_02.png"
                    }
                }
            )
        }
    }, [currentPath])


    return (
        <main className='flex min-h-screen justify-between p-10 gap-2 '>
            {/* LEFT  */}
            <section className=' w-2/6 bg-white rounded-xl drop-shadow-2xl flex flex-col items-center justify-center relative'>
                <div className='absolute top-3 left-3'>
                    <Image
                        className=' w-14 h-14'
                        src={"/static/mockLogo.png"}
                        alt=''
                        width={300}
                        height={300}
                        priority
                    />
                </div>
                <div className='flex flex-col gap-16 items-center justify-center'>
                    <h3 className='text-[#212B36] text-4xl font-bold w-2/3'>{conditionalData?.bannerData.title}</h3>

                    <figure className=''>
                        <Image
                            className='w-[700px]'
                            src={conditionalData?.bannerData.imageLink ? conditionalData?.bannerData.imageLink : "/static/characters/character_01.png"}
                            alt=''
                            width={1200}
                            height={1200}
                        />
                    </figure>
                </div>
            </section>

            {/* RIGHT  */}
            <section className=' w-4/6 relative flex items-center justify-center'>
                {/* top right link    */}
                <div className='absolute top-3 right-3 font-medium text-lg'>
                    {conditionalData ? (
                        <p className='text-[#212B36] cursor-pointer'>
                            {conditionalData.topRightLink.title} <Link href={conditionalData.topRightLink.link} className=' text-green-600 hover:underline'>{conditionalData.topRightLink.content}</Link>
                        </p>
                    ) : ("")}

                </div>


                {/* CONTENT SECTION  */}
                <div className='w-3/6 flex items-center justify-center'>

                    {children}

                </div>

            </section>
            {/* {children} */}
        </main>
    )
}

export default AuthLayout