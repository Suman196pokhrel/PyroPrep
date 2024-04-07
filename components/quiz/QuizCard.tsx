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
import { UseEmblaCarouselType } from 'embla-carousel-react'


export interface Question {
    id: string
    title: string
    options: string[]
}


interface QuizCardProps {
    data: Question[]
    api: CarouselApi
    setApi: React.Dispatch<React.SetStateAction<UseEmblaCarouselType | undefined>>

}

export const QuizCards = ({
    data,
    api,
    setApi
}: QuizCardProps) => {

    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
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
                setApi={() => setApi}
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
                                    <RadioGroup>
                                        {question.options.map((item, index) => (
                                            <div key={index} className='flex group items-center space-x-3 my-2 cursor-pointer text-green-800 p-5 rounded-md'>
                                                <RadioGroupItem value={item} id={index.toString()} className='text-green-600' />
                                                <Label className='cursor-pointer text-base font-semibold ' htmlFor={index.toString()}>{item}</Label>
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
                <Button onClick={() => api?.scrollTo(5 - 1)}>Slide to 5</Button>
            </div>
        </>
    )
}


