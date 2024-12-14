import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`hhttps://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.12.9/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyinfo;