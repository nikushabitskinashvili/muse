'use client'

import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import Navbar from '../Navbar/Navbar'
import { usePathname } from 'next/navigation';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { Song } from '@/app/Interfaces/Interfaces';
import songs from '@/app/array';

const RecoilWrapper = (props: { children: ReactNode }) => {

    let pathName = usePathname();

    return (
        <RecoilRoot>
            {pathName !== '/auth/login' && pathName !== '/auth/signup' && <Navbar/>}
            {props.children}

            <AudioPlayer songs={songs}/>
        </RecoilRoot>
    )
}

export default RecoilWrapper
