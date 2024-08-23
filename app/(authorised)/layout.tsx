
import React, {ReactNode} from "react";
import './layout.module.css'

type Props = {
    children:ReactNode;
}

const AuthLayout = (props:Props) => {
    return (
        <>
            {props.children}
        </>

    )
}

export default  AuthLayout;
