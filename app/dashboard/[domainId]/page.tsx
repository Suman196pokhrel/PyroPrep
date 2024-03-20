"use client"
import SubDomainCards from '@/components/molecules/SubDomainCards'
import React from 'react'
import { motion } from 'framer-motion';


const mockSubCategories = [
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
    {
        title: "Electrical Engineering",
        totalQuizSets: 18,
        completed: 6,
    },
    {
        title: "Mechanical Engineering",
        totalQuizSets: 22,
        completed: 9,
    },
    {
        title: "Civil Engineering",
        totalQuizSets: 15,
        completed: 5,
    },
    {
        title: "Chemical Engineering",
        totalQuizSets: 25,
        completed: 12,
    },
    {
        title: "Aerospace Engineering",
        totalQuizSets: 20,
        completed: 8,
    }
];




const DynamicDomainPage = ({ params }: { params: { domainId: string } }) => {


    return (
        <main className='w-full flex flex-col gap-5'>
            <h2 className='text-[#3d4e61] font-bold text-3xl'>{params.domainId.charAt(0).toUpperCase() + params.domainId.slice(1,)}</h2>

            <div className=' flex flex-wrap gap-10'>
                {/* DOMAIN CARDS  */}
                {mockSubCategories.map((items, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        key={index}
                    >
                        <SubDomainCards
                            items={items}
                            domainId={params.domainId}

                        />
                    </motion.div>
                ))}
            </div>
        </main>
    )
}

export default DynamicDomainPage