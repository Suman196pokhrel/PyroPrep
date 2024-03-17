"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'
import { MdOutlineComputer } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";




type cardData = {
    title: string
    totalQuizSets: number
    completed: number


}

type DomainCardProps = {
    items: cardData
}


const SubDomainCards = ({ items }: DomainCardProps) => {
    return (
        <div className='flex items-center  cursor-pointer border-2 rounded-md shadow-md hover:scale-105 hover:shadow-2xl transition-all ease-linear'>


            {/* LEFT  */}
            <div className='flex flex-col px-10 py-10 bg-gray-100'>
                <MdOutlineComputer className='text-3xl text-green-600' />
            </div>




            {/* RIGHT  */}
            <div className='flex flex-col px-7 py-7 gap-2 '>
                <h3 className=' text-xl font-semibold'>{items.title}</h3>
                <div className='flex items-center gap-5 text-sm'>
                    <div className='flex items-center gap-2 text-[#229A16]'>
                        <FaLayerGroup className='text-xl ' />
                        <p>{items.totalQuizSets} Sets</p>
                    </div>

                    <div className='flex items-center gap-2 text-[#1890FF]'>
                        <FaRegCheckCircle className='text-xl ' />
                        <p>{items.completed} Completed</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubDomainCards