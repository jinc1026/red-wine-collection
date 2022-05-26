import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

// styles
import './Navbar.css'

export default function Navbar(){
	return(
		<div className="navbar">
			<nav>
				<Link className="brand" to="/">Intro to Red Wines</Link>
				<Searchbar />
				<Link to="/create">Create</Link>
			</nav>
		</div>
	)
}