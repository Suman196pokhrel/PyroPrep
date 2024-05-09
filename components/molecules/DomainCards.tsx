"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'
import { Card, CardContent, CardHeader } from '../atoms/card'
import { Domain } from '../pages/DashboardPage'



type DomainCardProps = {
    items: Domain
}


const DomainCards = ({ items }: DomainCardProps) => {
    const router = useRouter()
    return (
        <div
            onClick={() => router.push(`/dashboard/${items.link}`)}
            // style={{ backgroundColor: items.bg }}
            className={`flex gap-4 cursor-pointer flex-col p-4 w-full items-center justify-center h-64  drop-shadow-md hover:scale-105 transition-all ease-linear hover:drop-shadow-2xl border rounded-lg`}
        >
            {/* <div className={`w-24 h-24 flex items-center rounded-full justify-center  bg-gradient-to-r ${items.gradient}`}

            >
                <items.icon className={` text-3xl`}  />
            </div> */}


            <h3 className={`text-lg text-[#005249] font-semibold`}>{items.title}</h3>
        </div>
    )
}

export default DomainCards