import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// styles
import './Searchbar.css'

export default function Searchbar(){
	const [term, setTerm] = useState('')
	const history = useHistory()
	
	const handleSubmit = (e)=>{
		e.preventDefault();
		history.push(`/red-wine-collection/search?q=${term}`)
		setTerm('')
	}
	
	return(
		<div className="searchbar">
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="search">Search:</label>
				<input type="text"
						 id="search"
						 onChange={(e)=>setTerm(e.target.value)}
						 value={term}
						 required></input>		
			</form>
		</div>
	)
}