import "./styles.scss";
import Hero from "../../components/Hero";

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
            <h1>Je suis un H1</h1>
			<section>
				<h2>Je suis un H2 dans une section</h2>
			</section>
		</main>
    );
};

export default Home;