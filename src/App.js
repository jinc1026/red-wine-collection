import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

// styles
import './App.css'

// pages
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Detail from './pages/detail/Detail'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'


function App() {
	const { mode } = useTheme();
	
	
  return (
    <div className={`App ${mode}`}>
		<BrowserRouter>
			<Navbar></Navbar>
			<ThemeSelector></ThemeSelector>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/detail/:id"><Detail /></Route>
				<Route path="/create"><Create /></Route>
				<Route path="/search"><Search /></Route>
			</Switch>
		</BrowserRouter>
    </div>
  );
}

export default App
