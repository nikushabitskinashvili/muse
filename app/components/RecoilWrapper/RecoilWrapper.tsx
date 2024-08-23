'use client'

import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import Navbar from '../Navbar/Navbar'
import { usePathname } from 'next/navigation';
import AudioPlayer from "@/app/components/AudioPlayer/AudioPlayer";
import songs from "@/app/array";

const RecoilWrapper = (props: { children: ReactNode }) => {

    let pathName = usePathname();

    return (
        <RecoilRoot>
            {pathName !== '/auth/login' && pathName !== '/auth/signup' && <Navbar/>}
            {props.children}
            {pathName !== '/auth/login' && pathName !== '/auth/signup' && <AudioPlayer songs={songs}/>}
        </RecoilRoot>
    )
}

export default RecoilWrapper
