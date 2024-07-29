'use client'

import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil' // Import RecoilRoot from recoil

const RecoilWrapper = (props: { children: ReactNode }) => {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}

export default RecoilWrapper
