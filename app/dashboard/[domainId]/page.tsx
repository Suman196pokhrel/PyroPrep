import SubDomainCards from '@/components/molecules/SubDomainCards'
import React from 'react'



const mockSubCategories = [
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
    {
        title: "Computer Engineering",
        totalQuizSets: 20,
        completed: 3,
    },
]


const DynamicDomainPage = ({ params }: { params: { domainId: string } }) => {


    return (
        <main className='w-full flex flex-col gap-5'>
            <h2 className='text-[#3d4e61] font-bold text-2xl'>{params.domainId.charAt(0).toUpperCase() + params.domainId.slice(1,)}</h2>

            <div className=' flex flex-wrap gap-10'>
                {/* DOMAIN CARDS  */}
                {mockSubCategories.map((items, index) => (
                    <SubDomainCards
                        key={index}
                        items={items}

                    />
                ))}
            </div>
        </main>
    )
}

export default DynamicDomainPage