import "./styles.scss";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import Motion from "../../components/Motion";

/**
 * Render Page : Home
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */

function Home() {
	return (
        <main>
			<Hero />
			<div className="welcome-container">
				<h1>Welcome Riders</h1>
			</div>
			<Carousel />

			<Motion />
		</main>
    );
};

export default Home;