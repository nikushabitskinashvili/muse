'use client'

import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import Navbar from '../Navbar/Navbar'
import { usePathname } from 'next/navigation';

const RecoilWrapper = (props: { children: ReactNode }) => {

    let pathName = usePathname();

    return (
        <RecoilRoot>
            {/* {pathName !== '/auth/login' && pathName !== '/auth/signup' && <Navbar/>} */}
            {props.children}
        </RecoilRoot>
    )
}

export default RecoilWrapper
