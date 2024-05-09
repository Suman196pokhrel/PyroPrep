"use client"
import React, { useEffect, useState } from 'react'
import DomainCards from '../molecules/DomainCards';
import { motion } from 'framer-motion';
import { getDomains } from '@/actions/quiz/getDomains';
import { MoonLoader } from 'react-spinners';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';





export interface Domain {

    id: string
    title: string
    link: string
}


const DashboardPage = () => {

    const [domains, setDomains] = useState<Domain[]>([])
    const [isFetching, setIsFetching] = useState(false)

    async function getDomainData() {
        try {
            setIsFetching(true)
            const response = await getDomains()
            if (response.error) {
                throw new Error(response.error)
            }

            if (response.success) {
                const domains = response.data.map((item) => ({
                    id: item.id,
                    title: item.name,
                    link: `/${item.name}`,
                }))
                setIsFetching(false)

                // console.log(domains)
                setDomains(domains)
            }
        } catch (error) {
            console.log(error)
        }


        setIsFetching(false)

    }


    useEffect(() => {

        getDomainData()

    }, [])



    return (
        <section className='w-full flex flex-col gap-5 '>
            <h2 className='text-[#3d4e61] font-bold text-3xl'>Domains</h2>


            {/* TODO: FIX ISSUE , LOADER IS NOT VISIBLE WHILE FETCHING   */}
            {isFetching && domains.length === 0 && (
                <div className='w-full pt-10 h-full flex items-center justify-center'>
                    <MoonLoader size={40} color='green' />
                </div>
            )}

            {!isFetching && domains.length !== 0 && (

                <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {/* DOMAIN CARDS  */}


                    {domains.map((items, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                        >
                            <DomainCards
                                key={index}
                                items={items}
                            />
                        </motion.div>
                    ))}


                </div>

            )}

            {/* {!isFetching && domains.length === 0 && (
                <div className='w-full h-full flex flex-col items-center gap-5 '>

                    <div className='flex  p-10 bg-destructive/10 rounded-full'>
                        <ExclamationTriangleIcon className=' w-10 h-10 text-red-400' />
                    </div>
                    <p className='text-sm text-gray-500'>Something went wrong.</p>


                </div>
            )} */}

        </section>
    )
}

export default DashboardPage
