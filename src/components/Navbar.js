import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Searchbar from './Searchbar'

// styles
import './Navbar.css'

export default function Navbar(){
	const { color, changeColor } = useTheme();
	
	return(
		<div className="navbar" style={{background: color}}>
			<nav>
				<Link className="brand" to="/">Intro to Red Wines</Link>
				<Searchbar />
				<Link to="/create">Create</Link>
			</nav>
		</div>
	)
}