"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../atoms/button'

const LandingPage = () => {

    const router = useRouter()
    return (
        <main className='flex flex-col gap-20'>
            <h1 className=' font-bold'>Landing Page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolor vel id obcaecati tempora inventore. Aperiam eveniet tempora pariatur veniam mollitia ad iusto minima, deleniti praesentium. Aperiam, aspernatur? Sunt quod voluptatum iure quas, a porro minima? Pariatur magnam voluptas numquam deleniti quaerat. Modi quas magnam perspiciatis minus deserunt officiis, enim sed animi adipisci nisi fugiat expedita autem culpa aliquid unde quam distinctio reprehenderit labore facere aliquam similique. Quam sequi nulla laboriosam molestias ipsum explicabo veniam dolores qui laudantium? Explicabo non consectetur sed nam molestiae facere laudantium consequatur quidem id. Sunt quibusdam quas quae, dolore doloremque dolorem reprehenderit perferendis illum temporibus quam nesciunt explicabo ipsam provident voluptate aliquam nam voluptatem? Alias nesciunt consectetur quibusdam ratione at debitis quidem saepe provident accusamus.</p>
            <div className='flex gap-5'>
                <Button onClick={() => router.push("/signup")}>Signup</Button>
                <Button onClick={() => router.push("/signin")}>Signin</Button>
            </div>

        </main>
    )
}

export default LandingPage