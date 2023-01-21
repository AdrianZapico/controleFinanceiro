import React from "react";
import * as C from "./styles";


export default function ResumeItem({ title, Icon, value, color }) {

    return (
        <>
            <C.Container>
                <C.Header>
                    <C.HeaderTitle>{title}</C.HeaderTitle>
                    <Icon />
                </C.Header>
                <C.Total style={color}>{value}</C.Total>
            </C.Container>

        </>
    )
}