import "./styles.scss";

/**
 * Render a About element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function About() {
    return(
        <section className="about-container">
            <p className="carousel-info">L'école de ski</p>
            <h2 className="about-title">Le Mercredi à Chalmazel</h2>

            <div className="about-wrapper">
                <div className="about-images-container">
                    <img src={require('../../assets/images/about/about1.jpg')} alt="carousel 1" ></img>
                </div>
                <div className="about-text-container">
                    <p className="about-text">
                        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asper naturaut odit aut fugit, sed quia consequuntur udicta sunt.
                        <br /><br />
                        Labore et dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do euismod tempor incidunt ut labore. Adipiscing elit, sed do eiusmod.
                    </p>
                    <button>View more</button>
                </div>

            </div>
		</section>
    );
}

export default About;