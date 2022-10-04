import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const titulosCard = ["Cumpleaños","Noticias","Animales","Frutas"];
	const arrayCard = titulosCard.map( (item) => <Card titulo={item}/> )

	return (
		<div className="content">
			<div className="d-flex flex-row justify-content-center">
				<Navbar/>
			</div>
			<div className="container">
				<div>
					<Jumbotron/>
				</div>
				<div className="d-flex flex-row mt-3 mb-3 justify-content-center align-items-center">
					{arrayCard}
				</div>
				<div>
					<Footer/>
				</div>
				
			</div>
		</div>
	);
};

export default Home;
