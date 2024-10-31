import React, { useEffect, useState } from "react";



export default function Card({
    heading,
    imgLink,
    className,
    ...props
}) {
    return (
        <div className="w-72 h-96 bg-white rounded-2xl">

            <img src={imgLink} alt="" />
            <h1>{heading}</h1>
            
        </div>
    )
}


