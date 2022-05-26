// styles
import './Home.css'

import useFetch from '../../hooks/useFetch'
import WineList from '../../components/WineList'

export default function Home(){
	const wineListUrl = "https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines"
	const { data, isPending, error } = useFetch(wineListUrl);
	
	return(
		<div className="home">
			{isPending && <p>Loading...</p>}
			{error && <p>Unable to Load the list</p>}
			{data && <WineList wines={data}></WineList>}
		</div>
	)
}