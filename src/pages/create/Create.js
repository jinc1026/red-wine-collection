import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

// styles
import './Create.css'

export default function Create(){
	const [wineName, setWineName] = useState('')
	const [wineryName, setWineryName] = useState('')
	const [rating, setRating] = useState('')
	const [numRatings, setNumRatings] = useState('')
	const { data, isPending, error, postData } = useFetch("https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines", "POST")
	const history = useHistory()
	
	const handleSubmit = (e) => {
		e.preventDefault()
		postData({wineName, wineryName, rating, numRatings})
	}
	
	useEffect(()=>{
		if(data){
			history.push("/")
		}
		
	},[data])
	
	return (
		<div className="create">
			<form onSubmit={handleSubmit}>
				<label>
					<span>Wine Name:</span>
					<input type="text"
							 onChange={(e)=>{setWineName(e.target.value)}}
							 value={wineName}
							 required></input>
				</label>
				<label>
					<span>Winery Name:</span>
					<input type="text"
							 onChange={(e)=>{setWineryName(e.target.value)}}
							 value={wineryName}
							 required></input>
				</label>
				<label>
					<span>Rating:</span>
					<input type="number"
							 max="5"
							 onChange={(e)=>{setRating(e.target.value)}}
							 value={rating}
							 required></input>
				</label>
				<label>
					<span>Number of Ratings:</span>
					<input type="number"
							 max="9999"
							 value={numRatings}
							 onChange={(e)=>{setNumRatings(e.target.value)}}
							 required></input>
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}