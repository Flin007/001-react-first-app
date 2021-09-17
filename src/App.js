import logo from './logo.svg';
import './App.css';

function App() {
  return (
	<div>
		<Header />
		<Technologies />
		<Footer />
	</div>
  );
}

function Header() {
	return(
		<header>
			<ul>
				<li><a href="">Ссылка1</a></li>
				<li><a href="">Ссылка2</a></li>
				<li><a href="">Ссылка3</a></li>
			</ul>
		</header>
	); 
}

function Technologies() {
	return(
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JS</li>
		</ul>
	)
}

function Footer() {
	return(
		<footer>
			<p>Footer</p>
		</footer>
	)
}

export default App;
