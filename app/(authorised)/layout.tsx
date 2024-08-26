import React, { ReactNode } from "react";
import './layout.module.css'
import Navbar from "../components/Navbar/Navbar";
import RecoilWrapper from "../components/RecoilWrapper/RecoilWrapper";

type Props = {
    children: ReactNode;
}

const AuthLayout = (props: Props) => {
    return (
        <>
            <Navbar />
            <RecoilWrapper>
                {props.children}
            </RecoilWrapper>
        </>

    )
}

export default AuthLayout;
