import { useLocation } from 'react-router-dom'
import WineList from '../../components/WineList'
import useFetch from '../../hooks/useFetch'

// styles
import './Search.css'

export default function Search(){
	const queryString = useLocation().search
	const queryParams = new URLSearchParams(queryString)
	const query = queryParams.get('q')
	
	const url = "https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines?q=" + query;
	
	const { data, isPending, error} = useFetch(url);
	
	return(
		<div className="search">
			<h2 className="page-title">Recipes including "{query}"</h2>
			{error && <p className="error">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{data && <WineList wines={data}></WineList>}
		</div>
	)
}