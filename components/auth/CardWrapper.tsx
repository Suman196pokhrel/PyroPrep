"use client"

import Link from "next/link"
import { Checkbox } from "../atoms/checkbox"
import AuthHeader from "../molecules/AuthHeader"
import LoginMethods from "../molecules/LoginMethods"
import { Header } from "./Header"
import Social from "./SocialLogins"
import { BackButton } from "./BackButton"


interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    headerSubLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    headerSubLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <main className='flex flex-col items-center w-full space-y-3 xxl:space-y-5 '>
            {/* HEADER  */}
            <Header
                label={headerLabel}
                subLabel={headerSubLabel}
            />

            {/* LOGIN METHODS  */}
            <Social />

            {children}

            {/* LOGIN OPTIONS  */}
            <BackButton
                backButtonHref={backButtonHref}
                backButtonLabel={backButtonLabel}
            />

        </main>
    )
}
