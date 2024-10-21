import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [apidata , setApiData] = useState({})
    useEffect(() => {

        const apiCall = async () => {
            const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_kchau2wsqrCdQEgM3cFlbKCBMYC0vVSDHeOgLNnN&base_currency=USD&currencies=INR`
            let response = await fetch(URL);
            let data = await response.json();
            // console.log(data['meta']);
            setApiData(data);
        }

        apiCall();
    }, [])
    return apidata;
    
}

export default useCurrencyInfo;