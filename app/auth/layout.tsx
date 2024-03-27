import Image from 'next/image'
import React from 'react'

type AuthLayoutProps = {
    children: React.ReactNode
}



const AuthLayout = (
    {
        children
    }: AuthLayoutProps
) => {
    return (
        <main className='flex border-2 border-red-600 min-h-screen justify-between p-10 gap-2 '>
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
                    <h3 className='text-[#212B36] text-5xl font-bold'>Hi, welcome to pyroprep</h3>

                    <figure className=''>
                        <Image
                            className='w-[700px]'
                            src={"/static/characters/character_01.png"}
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
                    <p className='text-[#212B36] cursor-pointer'>
                        Don't have an account? <span className=' text-green-600 hover:underline'>Get started</span>
                    </p>
                </div>


                {/* CONTENT SECTION  */}
                <div className='border-2 border-red-500 w-3/6 flex items-center justify-center'>

                    {children}

                </div>

            </section>
            {/* {children} */}
        </main>
    )
}

export default AuthLayout