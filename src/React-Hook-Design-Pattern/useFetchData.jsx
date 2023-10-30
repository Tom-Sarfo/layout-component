import { useState, useEffect } from "react";

export default function useFetchData(endpoint) {
	const [result, setResult] = useState([]);

    async function fetchData(endpoint){
        const data = await fetch(endpoint);
        const response = await data.json();
        // console.log(response);
        setResult(response);
    }

	useEffect(() => {
		fetchData(endpoint);
	}, [endpoint]);

	return result;
}
