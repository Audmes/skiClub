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
			<Carousel />
			<section>
				
			</section>
			<Motion />
		</main>
    );
};

export default Home;