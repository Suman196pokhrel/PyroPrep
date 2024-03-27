"use client"
import React from 'react'
import { MdOutlineBookmarkAdd } from "react-icons/md";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/atoms/dialog"
import { Button } from '@/components/atoms/button';
import { MdBookmarkAdded } from "react-icons/md";
import { useRouter } from 'next/navigation';



type cardData = {
    id: number
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
    subDomainId: string

}



const TestSetCard = ({ items, subDomainId }: TestSetCardProps) => {
    const router = useRouter()


    const handleConfirmQuiz = (quizId: number) => {
        router.push(`${subDomainId}/${quizId}`)
    }


    return (
        <div className='flex flex-col gap-5 cursor-pointer border-2 rounded-md shadow-md hover:scale-105 hover:shadow-2xl transition-all ease-linear p-3 w-64 h-40'>
            <div className='w-full flex items-center justify-between'>
                <Dialog>
                    <DialogTrigger asChild >
                        <h3 className=' text-[#005249] text-2xl font-bold transition-all ease-linear hover:underline'>{items.title}</h3>

                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">

                        <DialogHeader>
                            <DialogTitle className=' text-2xl'>Start Test {items.title} ?</DialogTitle>
                            <DialogDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia eaque at libero a repellat beatae assumenda ipsum ab fugiat error
                            </DialogDescription>
                        </DialogHeader>

                        <DialogFooter className='flex flex-row gap-20'>
                            <DialogClose asChild>
                                <Button>Cancel</Button>
                            </DialogClose>
                            <Button onClick={() => handleConfirmQuiz(items.id)} className='bg-[#00AB55] text-white text-md font-semibold'>Confirm</Button>

                        </DialogFooter>

                    </DialogContent>
                </Dialog>

                {items.isFavourite ? (
                    <MdBookmarkAdded className=' text-[#229A16] text-3xl hover:scale-110 bg-white hover:shadow-lg transition-all ease-linear ' />
                ) :
                    <MdOutlineBookmarkAdd className=' text-[#229A16] text-3xl hover:scale-110 bg-white hover:shadow-lg transition-all ease-linear ' />
                }
            </div>
            <ul className=' text-[#637381] w-full flex flex-col items-start justify-start'>
                <li>Total questions : <span className=' font-semibold'>{items.details.totalQuestions}</span></li>
                <li>Status : <span className=' font-semibold'>{items.details.status ? "Completed" : "Not Completed"}</span></li>
                <li>Time : <span className=' font-semibold'>{items.details.totalTime} mins</span></li>
            </ul>
        </div>


    )
}

export default TestSetCard