"use client"
import React from 'react'
import { Input } from '../atoms/input'
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { RadioGroup, RadioGroupItem } from '../atoms/radiogroup'
import { Label } from '../atoms/label'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../atoms/carousel'


export interface Question {
    id: string
    title: string
    options: string[]
}


interface QuizCardProps {
    data: Question[]
}

export const QuizCards = ({
    data
}: QuizCardProps) => {
    return (
        <Carousel orientation="horizontal" className='w-full' plugins={[

        ]}>
            <CarouselContent>
                {data.map((question, index) => (
                    <CarouselItem key={index} className=' p-5 flex items-center justify-center'>
                        <div className='flex  flex-col space-y-10 p-5 w-full h-[500px] rounded-lg drop-shadow-xl bg-white'>
                            <h2 className=' font-bold text-xl text-green-800'><span>{question.id} . </span>{question.title}</h2>
                            <fieldset className=''>
                                <RadioGroup>
                                    {question.options.map((item, index) => (
                                        <div key={index} className='flex items-center space-x-3 my-4 cursor-pointer text-green-800'>
                                            <RadioGroupItem value={item} id={index.toString()} className='text-green-600' />
                                            <Label className='cursor-pointer text-base font-semibold' htmlFor={index.toString()}>{item}</Label>
                                        </div>
                                    ))}

                                </RadioGroup>

                            </fieldset>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='border-green-600 text-green-700' />
            <CarouselNext className='border-green-600 text-green-700' />
        </Carousel>
    )
}




{/* <div className='flex flex-col justify-start gap-10 pt-5 px-5 w-full h-[600px] rounded-lg drop-shadow-xl bg-white p-2 '>
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
</div> */}
