"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothInView, smoothSlideUp } from '@/lib/framerAnimations'

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

const AuthLayout = ({
    children
}: AuthLayoutProps) => {

    const currentPath = usePathname()
    const [conditionalData, setConditionalData] = useState<ConditionalData | null>(null)

    useEffect(() => {
        if (currentPath === "/auth/signin") {
            setConditionalData({
                topRightLink: {
                    title: "Don't have an account ?",
                    content: "Get started",
                    link: "/auth/signup"
                },
                bannerData: {
                    title: "Get Ready To Ace Your Exams With PyroPrep.",
                    imageLink: "/static/characters/character_01.png"
                }
            })
        } else {
            setConditionalData({
                topRightLink: {
                    title: "Already have an account ?",
                    content: "Login",
                    link: "/auth/signin"
                },
                bannerData: {
                    title: "Work smart & Ace your exams with Pyroprep.",
                    imageLink: "/static/characters/character_02.png"
                }
            })
        }
    }, [currentPath])

    return (
        <main className='flex min-h-screen justify-between p-3 lg:p-5 xxl:p-10 gap-2'>
            <AnimatePresence mode='wait'>

                <section className='w-2/6 hidden bg-white rounded-xl drop-shadow-2xl lg:flex flex-col items-center justify-center relative'>
                    <motion.div {...smoothSlideUp} className='absolute top-3 left-3'>
                        <Link href={"/"}>
                            <Image
                                className='xxl:w-14 xxl:h-14 w-10 h-10'
                                src={"/static/mockLogo.png"}
                                alt=''
                                width={300}
                                height={300}
                                priority
                            />
                        </Link>
                    </motion.div>
                    <div className='flex flex-col gap-16 items-center justify-center'>
                        <h3 className='text-gray-800 text-xl xl:text-3xl font-bold w-4/6'>{conditionalData?.bannerData.title}</h3>
                        {conditionalData && (
                            <motion.figure key={currentPath} {...smoothSlideUp}>
                                {conditionalData.bannerData.imageLink && (
                                    <Image
                                        className='w-[500px]'
                                        src={conditionalData.bannerData.imageLink}
                                        alt=''
                                        width={1200}
                                        height={1200}
                                        priority
                                    />
                                )}
                            </motion.figure>
                        )}
                    </div>
                </section>

            </AnimatePresence>


            <section className='w-full lg:w-4/6 relative flex flex-col items-center justify-center'>
                <div className='absolute top-1 right-0 lg:top-3 lg:right-3 font-medium lg:text-lg text-sm'>
                    {conditionalData && (
                        <p className='text-[#212B36] cursor-pointer'>
                            {conditionalData.topRightLink.title}{' '}
                            <Link href={conditionalData.topRightLink.link} className='text-green-600 hover:underline'>
                                {conditionalData.topRightLink.content}
                            </Link>
                        </p>
                    )}
                </div>

                <motion.div className='w-5/6 lg:w-3/6 xl:2/6 2xl:w-2/6 flex items-center justify-center '>{children}</motion.div>

            </section>

        </main>
    )
}

export default AuthLayout
