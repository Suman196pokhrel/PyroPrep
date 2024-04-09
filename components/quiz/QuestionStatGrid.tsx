"use client"
import { Clock } from 'lucide-react'
import React from 'react'
import { Question } from './QuizCard'
import { CarouselApi } from '../atoms/carousel'
import { Button } from '../atoms/button'
import { QuestionState } from '@/app/dashboard/[domainId]/[subDomainId]/[quizid]/page'


function generateDummyArray(n: number) {
    let array = []
    for (let i = 1; i <= n; i++) {
        array.push(i)
    }
    return array
}

interface QuestionStatGridProps {
    data: Question[]
    api: CarouselApi
    quizFormState: QuestionState

}


export const QuestionStatGrid = (
    { data, api, quizFormState }: QuestionStatGridProps
) => {

    const dummyArray = generateDummyArray(100)

    return (
        <div className='flex flex-col items-start justify-start'>
            <h2 className='text-[#3d4e61] font-bold text-lg'>Questions</h2>



            {/* GRID CONTAINER  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full  gap-3 mt-5 max-h-[300px] overflow-x-hidden overflow-y-auto p-2 border-2'>
                {data.map((question, index) => (
                    <Button variant={"outline"} key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`border-2 border-gray-300 text-gray-600 
                    cursor-pointer ${quizFormState[question.id] ? 'bg-green-600 text-white border-none' : ''}                    rounded-md `}>
                        {question.id}
                    </Button>
                ))}
            </div>
        </div>
    )
}
