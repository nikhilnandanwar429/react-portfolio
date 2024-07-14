import React, { useEffect, useState } from "react";


export default function Card({
    apiLink,
    className,
    ...props
}) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(apiLink)
        .then(res => res.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
    },[])

    return(
        <div>
            <img src={data.profile} alt="" />
        </div>
    )
}


