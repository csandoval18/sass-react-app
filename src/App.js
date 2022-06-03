import './App.scss';
import './Components/Navbar/Navbar';
import './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
		</div>
	);
}

export default App;
