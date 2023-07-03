import React from "react";

export default function DieBtn(props)
{
    const style = {
        background: "linear-gradient(62deg, #03C03C, #50C878)"
    }
    return(
        <button style={props.clicked ? style : {}} onClick={props.handleClick}>{props.number}</button>
    )
}