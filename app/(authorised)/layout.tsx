import React, { ReactNode } from "react";
import './layout.module.css'
import Navbar from "../components/Navbar/Navbar";
import RecoilWrapper from "../components/RecoilWrapper/RecoilWrapper";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import songs from "../array";

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
            <AudioPlayer songs={songs} />
        </>

    )
}

export default AuthLayout;
