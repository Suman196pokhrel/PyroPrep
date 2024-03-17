"use client"
import React from 'react'
import { FaGear } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import DomainCards from '../molecules/DomainCards';
import { motion } from 'framer-motion';




const mockDomains = [
    {
        title: "Engineering",
        link: "/engineering",
        icon: FaGear,
        bg: "#C8FACD",
        fg: "#005249",
        gradient: "from-green-200 to-green-300",
    },
    {
        title: "Medical",
        link: "/medical",
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

            <div className=' grid grid-cols-4 gap-10'>
                {/* DOMAIN CARDS  */}
                {mockDomains.map((items, index) => (
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
        </section>
    )
}

export default DashboardPage