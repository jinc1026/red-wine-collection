import { useState, useEffect } from 'react'

export default function useFetch(url="", method="GET"){
	const [data, setData] = useState('')
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const [options, setOptions] = useState(null)
	
	const postData = (postData) => {
		setOptions({
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(postData)
		})
	}
	
	useEffect(()=>{
		const fetchData = async (fetchOptions={}) => {
			setIsPending(true)
			try{
				const response = await fetch(url,fetchOptions);
					if(!response.ok) throw new Error(response.statusText)
				const resData = await response.json()
				setData(resData)
				setIsPending(false)
				setError(null)
			} catch (err){
				setError(true)
			}
		}
		
		if (method === "GET") fetchData()
		if (method === "POST" && options) {
			fetchData(options)
		}
		
	},[url, options, method])

	return { data, isPending, error, postData }
}