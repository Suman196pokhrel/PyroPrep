"use client"
import React from 'react'
import { Input } from '../atoms/input'
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { RadioGroup, RadioGroupItem } from '../atoms/radiogroup'
import { Label } from '../atoms/label'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi

} from '../atoms/carousel'
import { Button } from '../atoms/button'
import { type UseEmblaCarouselType } from 'embla-carousel-react'


export interface Question {
    id: string
    title: string
    options: string[]
}


interface QuizCardProps {
    data: Question[]
    api: CarouselApi
    //@ts-ignore
    setApi: ((api: EmblaCarouselType | undefined) => void) | undefined
    handleOptionSelect: (questionId: string, selectedOption: string) => void

}

export const QuizCards = ({
    data,
    api,
    setApi,
    handleOptionSelect
}: QuizCardProps) => {

    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)



    // TO UPDATE THE SLIDE COUNT 
    React.useEffect(() => {
        if (!api) {
            console.log("NO API FOUND")
            return
        }


        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {

            setCurrent(api.selectedScrollSnap() + 1)
        })

    }, [api])

    return (
        <>
            <Carousel
                orientation="horizontal"
                className='w-full'
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true
                }}
                plugins={[

                ]}>
                <CarouselContent>
                    {data.map((question, index) => (
                        <CarouselItem key={index} className=' p-5 flex items-center justify-center'>
                            <div className='flex  flex-col space-y-10 p-5 w-full h-[500px] rounded-lg drop-shadow-xl bg-white'>
                                <h2 className=' font-bold text-xl text-green-800'><span>{question.id} . </span>{question.title}</h2>
                                <fieldset className=''>
                                    <RadioGroup
                                        onValueChange={(value) => handleOptionSelect(question.id, value)}
                                    >
                                        {question.options.map((item, index) => (
                                            <div key={index} className='flex group items-center space-x-3 my-2 cursor-pointer text-green-800 p-5 rounded-md '>
                                                <RadioGroupItem
                                                    value={item}
                                                    id={item}
                                                    className='text-green-600'

                                                />
                                                <Label className='cursor-pointer text-base font-semibold w-full transition-all' htmlFor={item}>{item}</Label>
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
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </>
    )
}


