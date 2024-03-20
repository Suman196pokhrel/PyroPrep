import React from 'react'
import { MdOutlineBookmarkAdd } from "react-icons/md";


type cardData = {
    title: string
    details: {
        totalQuestions: number,
        status: boolean,
        totalTime: number
    },
    isFavourite: boolean


}



type TestSetCardProps = {
    items: cardData
}



const TestSetCard = ({ items }: TestSetCardProps) => {
    return (
        <div className='flex flex-col gap-5 cursor-pointer border-2 rounded-md shadow-md hover:scale-105 hover:shadow-2xl transition-all ease-linear p-3 w-64 h-40'>
            <div className='w-full flex items-center justify-between'>
                <h3 className=' text-[#005249] text-2xl font-bold'>{items.title}</h3>

                <MdOutlineBookmarkAdd className=' text-[#229A16] text-3xl hover:scale-110 bg-white hover:shadow-lg transition-all ease-linear ' />
            </div>
            <ul className=' text-[#637381]'>
                <li>Total questions : <span className=' font-semibold'>{items.details.totalQuestions}</span></li>
                <li>Status : <span className=' font-semibold'>{items.details.status ? "Completed" : "Not Completed"}</span></li>
                <li>Time : <span className=' font-semibold'>{items.details.totalTime}</span></li>
            </ul>
        </div>
    )
}

export default TestSetCard