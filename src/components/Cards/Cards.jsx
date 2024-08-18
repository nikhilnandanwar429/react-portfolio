import React, { useEffect, useState } from "react";



export default function Card({
    imgLink,
    className,
    ...props
}) {
    return (
        <div className="w-72 h-96 bg-white rounded-2xl">

            <img src={imgLink} alt="" />
        </div>
    )
}


