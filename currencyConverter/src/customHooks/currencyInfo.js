import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [apidata , setApiData] = useState({})
    useEffect(() => {

        const apiCall = async () => {
            const URL = `API`
            let response = await fetch(URL);
            let data = await response.json();
            // console.log(data['meta']);
            setApiData(data);
        }

        apiCall();
    }, [currency])
    return apidata.data;
    
}

export default useCurrencyInfo;