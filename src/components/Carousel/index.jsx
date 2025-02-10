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
            <div className="carousel-slides">
                <div className="carousel-text-container">
                    <p className="carousel-info">Welcome Riders</p>
                    <h2 className="carousel-title">Prochaine sortie le 15 Février !</h2>
                    <p className="carousel-text">
                        Passez au club vous inscrire et régler votre participation. <br/>
                        Le mardi ou jeudi de 17H30 à 19H30
                    </p>
                </div>
                <div className="carousel-images-container">
                    <img src={require('../../assets/images/carousel/carousel1.jpg')} alt="carousel image 1" ></img>
                </div>
            </div>
            {/* <div className="carousel-slides">
                <div className="carousel-text-container">
                    <p className="carousel-info">Welcome Riders</p>
                    <h2 className="carousel-title">We're sure you'll love it</h2>
                    <p className="carousel-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloremque repudiandae est ut ex provident.
                    </p>
                </div>
                <div className="carousel-images-container">
                    <img src={require('../../assets/images/carousel/carousel2.jpg')} alt="carousel image 2" ></img>
                    <img src={require('../../assets/images/carousel/carousel3.jpg')} alt="carousel image 3" ></img>
                </div>
            </div> */}
            <div className="carousel-buttons">
                <div className="carousel-previous">Previous</div>
                <div className="carousel-next">Next</div>
            </div>
		</section>
    );
}

export default Carousel;

