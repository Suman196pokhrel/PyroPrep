import React from 'react'
import { FaGear } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Link from 'next/link';







const mockDomains = [
    {
        title: "Engineering",
        link: "/eng",
        icon: FaGear,
        bg: "#C8FACD",
        fg: "#005249",
        gradient: "from-green-200 to-green-300",
    },
    {
        title: "Medical",
        link: "/med",
        icon: FaBriefcaseMedical,
        bg: "#D0F2FF",
        fg: "#0C53B7",
        gradient: "from-blue-200 to-blue-300",


    },
    {
        title: "GRE",
        link: "/gre",
        icon: FaBook,
        bg: "#FFF7CD",
        fg: "#7A4F01",
        gradient: "from-yellow-200 to-yellow-300",



    },
    {
        title: "SAT",
        link: "/sat",
        icon: FaPencil,
        bg: "#FFE7D9",
        fg: "#7A0C2E",
        gradient: "from-red-200 to-red-300",



    },
]


const DashboardPage = () => {
    return (
        <section className='w-full flex flex-col gap-5'>
            <h2 className='text-[#3d4e61] font-bold text-3xl'>Domains</h2>

            <div className='flex gap-10'>
                {/* DOMAIN CARDS  */}
                {mockDomains.map((items, index) => (
                    <Link
                        key={index}
                        href={items.link}
                        style={{ backgroundColor: items.bg }}
                        className={`flex gap-4 flex-col p-4 w-1/4 items-center justify-center h-64 rounded-lg drop-shadow-md hover:scale-105 transition-all ease-linear hover:drop-shadow-2xl`}
                    >
                        <div className={`w-24 h-24 flex items-center rounded-full justify-center  bg-gradient-to-r ${items.gradient}`}

                        >
                            <items.icon className={` text-3xl`} style={{ color: items.fg }} />
                        </div>

                        <h3 className={`text-lg text-[#005249] font-semibold`}>{items.title}</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default DashboardPage