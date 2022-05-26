import {BrowserRouter, Route, Switch} from 'react-router-dom'

// styles
import './App.css'

// pages
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Detail from './pages/detail/Detail'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Navbar></Navbar>
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
