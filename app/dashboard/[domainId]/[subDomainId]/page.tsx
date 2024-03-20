"use client"
import React from 'react'
import { motion } from "framer-motion"
import TestSetCard from '@/components/molecules/TestSetCard';
import { Checkbox } from '@/components/atoms/checkbox';
import { Label } from '@/components/atoms/label';



const mockTestSets = [
    {
        title: "Set 1",
        details: {
            totalQuestions: 30,
            status: false,
            totalTime: 45
        },
        isFavourite: false
    },
    {
        title: "Set 2",
        details: {
            totalQuestions: 25,
            status: true,
            totalTime: 40
        },
        isFavourite: true
    },
    {
        title: "Set 3",
        details: {
            totalQuestions: 40,
            status: true,
            totalTime: 60
        },
        isFavourite: false
    },
    {
        title: "Set 4",
        details: {
            totalQuestions: 20,
            status: false,
            totalTime: 35
        },
        isFavourite: true
    },
    {
        title: "Set 5",
        details: {
            totalQuestions: 35,
            status: true,
            totalTime: 55
        },
        isFavourite: false
    }
];



const SubDomainPage = ({ params }: { params: { subDomainId: string } }) => {
    return (
        <main className='w-full flex flex-col gap-5'>
            <h2 className='text-[#3d4e61] font-bold text-3xl'>Choose from test sets</h2>


            <div className='flex flex-row items-start'>

                {/* CARDS  */}
                <div className=' flex flex-wrap gap-10 w-3/4'>
                    {/* DOMAIN CARDS  */}
                    {mockTestSets.map((items, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                            key={index}
                        >

                            <TestSetCard
                                items={items}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* OPTIONS  */}
                <div className='flex flex-col text-[#005249] items-start pl-5 w-1/4 h-full border-l-2 border-gray-200 gap-10'>
                    {/* FILTERS  */}
                    <div className='flex flex-col'>
                        <h2 className='text-[#3d4e61] font-bold text-3xl'>Filters</h2>
                        <div className='flex flex-col gap-3 mt-5'>
                            <div className='flex items-center gap-2'>
                                <Checkbox id="terms" className=' w-6 h-6 text-white border-gray-300 data-[state=checked]:bg-[#229A16] data-[state=checked]:text-white ' />
                                <Label
                                    htmlFor="terms"
                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Completed
                                </Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Checkbox id="terms" className=' w-6 h-6 text-white border-gray-300 data-[state=checked]:bg-[#229A16] data-[state=checked]:text-white ' />
                                <Label
                                    htmlFor="terms"
                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Not Completed
                                </Label>
                            </div>
                        </div>
                    </div>

                    {/* SORT  */}
                    <div className='flex flex-col '>
                        <h2 className='text-[#3d4e61] font-bold text-3xl'>Sort</h2>
                        <div className='flex flex-col gap-3 mt-5'>
                            <div className='flex items-center gap-2'>
                                <Checkbox id="terms" className=' w-6 h-6 text-white border-gray-300 data-[state=checked]:bg-[#229A16] data-[state=checked]:text-white ' />
                                <Label
                                    htmlFor="terms"
                                    className="text-md  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Completed
                                </Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Checkbox id="terms" className=' w-6 h-6 text-white border-gray-300 data-[state=checked]:bg-[#229A16] data-[state=checked]:text-white ' />
                                <Label
                                    htmlFor="terms"
                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Not Completed
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default SubDomainPage