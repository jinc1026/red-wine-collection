import { Link } from 'react-router-dom'

// styles
import './WineList.css'

export default function WineList({wines}){
	if (wines.length === 0){
		return (<div className = "error">
			<h2>No Recipes to load...</h2> 
		</div>)
	}
	
	return(
		<div className="wine-list">
			{wines.map((wine)=>(
				<div key={wine.id} className="card">
					<h3>{wine.wine}</h3>
					<p>By {wine.winery}</p>
					<Link to={`/detail/${wine.id}`}>More Detail</Link>
				</div>
			))}
		</div>
	)
}