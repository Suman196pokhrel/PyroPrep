"use client"
import React from 'react'
import { Input } from '../atoms/input'
import { RadioGroup, RadioGroupItem } from '../atoms/radiogroup'
import { Label } from '../atoms/label'


interface Question {
    id: string
    title: string
    options: string[]
}


interface QuizCardProps {
    data: Question
}

export const QuizCard = ({
    data
}: QuizCardProps) => {
    return (
        <div className='flex flex-col justify-start gap-10 pt-5 px-5 w-full h-[600px] rounded-lg drop-shadow-xl bg-white p-2 '>
            <h2 className=' font-bold text-xl text-green-800'><span>{data.id} . </span>{data.title}</h2>
            <fieldset className=''>
                <RadioGroup>
                    {data.options.map((item, index) => (
                        <div key={index} className='flex items-center space-x-3 my-4 cursor-pointer text-green-800'>
                            <RadioGroupItem value={item} id={index.toString()} className='text-green-600' />
                            <Label className='cursor-pointer text-base font-semibold' htmlFor={index.toString()}>{item}</Label>
                        </div>
                    ))}

                </RadioGroup>

            </fieldset>
        </div>
    )
}
