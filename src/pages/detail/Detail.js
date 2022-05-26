import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

// styles
import './Detail.css'

export default function Detail(){
	const { id } = useParams()
	const url = "https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines/" + id;
	const { data, isPending, error } = useFetch(url)
	
	
	return(
		<div className="detail">
			{isPending && <p>Loading...</p>}
			{error && <p>Unable to show detail</p>}
			{data && (<>
						 <h2 className="page-title">{data.wine}</h2>
						 <p>By {data.winery}</p>
						 <ul>
						 	<li>Rating: {data.rating.average}</li>
						 	<li>Reviews: {data.rating.reviews}</li>
						 </ul>
						 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae est at tellus lacinia finibus imperdiet at ipsum. Pellentesque sit amet tellus elementum, imperdiet leo nec, eleifend mauris. Aenean porttitor lorem eu nisi porta semper. Vivamus ornare finibus leo, sit amet feugiat arcu finibus sit amet.</p>
						</>)}
		</div>
	)
}