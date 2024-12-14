import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             SVGMetadataElement(data)
//         })
//     },[])
    return (
        <div className="bg-gray-600 text-white text-3xl p-4 text-center m-4"> Github followers: {data.followers}</div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}