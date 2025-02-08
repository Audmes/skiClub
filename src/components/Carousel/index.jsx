import "./styles.scss";

/**
 * Render a Carousel element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Carousel() {
    return(
        <section className="carousel-container">
				<h2 className="carousel-title">We're sure you'll love it</h2>
				<p className="carousel-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis enim doloribus delectus quod laudantium!
                </p>
		</section>
    );
}

export default Carousel;

