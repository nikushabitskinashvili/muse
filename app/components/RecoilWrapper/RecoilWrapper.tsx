'use client'

import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil' // Import RecoilRoot from recoil
import Navbar from '../Navbar/Navbar'

const RecoilWrapper = (props: { children: ReactNode }) => {
    return (
        <RecoilRoot>
            <Navbar/>
            {props.children}
        </RecoilRoot>
    )
}

export default RecoilWrapper
