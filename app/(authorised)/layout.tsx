import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import React, {ReactNode} from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import './layout.module.css'

type Props = {
    children:ReactNode;
}

const AuthLayout = (props:Props) => {
    return (
        <>
            {/*<Navbar/>*/}
            {props.children}
        </>

    )
}

export default  AuthLayout;
