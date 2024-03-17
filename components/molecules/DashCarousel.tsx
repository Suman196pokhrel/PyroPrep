import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/atoms/carousel"
import Image from 'next/image'


const carousalImages = [
    "/static/carousel/cover_1.jpg",
    "/static/carousel/cover_10.jpg",
    "/static/carousel/cover_11.jpg",
    "/static/carousel/cover_12.jpg",
    "/static/carousel/cover_14.jpg",

]

const DashCarousel = () => {
    return (
        <main className='w-1/4 rounded-xl'>

            <Carousel className=''>

                <CarouselContent>
                    {carousalImages.map((item, index) => (
                        <CarouselItem key={index} className='flex items-center justify-center h-[320px] w-[300px]'>
                            <Image
                                className='h-full w-full rounded-xl'
                                src={item}
                                alt=''
                                width={800}
                                height={800} />
                        </CarouselItem>

                    ))}


                </CarouselContent>


                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </main>

    )
}

export default DashCarousel