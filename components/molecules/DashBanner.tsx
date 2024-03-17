import Image from 'next/image'
import React from 'react'
import { Button } from '../atoms/button'

const DashBanner = () => {
    return (
        <div className=' bg-[#C8FACD] rounded-xl flex items-center justify-between p-4 w-3/4'>
            {/* LEFT  */}
            <div className='w-1/2 flex flex-col items-start gap-5'>
                <h2 className='text-[#3d4e61] font-bold text-3xl'>Welcome back Suman Pokhrel !</h2>
                <p className=' text-sm text-[#212B36]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, soluta. Officasi laboriosam. Voluptates, deserunt? Numquam laborum sequi tempora.</p>
                <Button className='bg-[#00AB55]'>Go Now</Button>
            </div>

            {/* RIGHT  */}
            <figure className=''>
                <Image className='' src={"/static/heroImg.png"} alt='' width={450} height={200} />
            </figure>
        </div>
    )
}

export default DashBanner