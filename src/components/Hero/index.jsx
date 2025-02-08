import "./styles.scss";

/**
 * Render a Hero element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Hero() {
    return(
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-text-wrapper">
                    <div className="hero-text-subtitle">Sors de ton lit,</div>
                    <div className="hero-text-title">
                        <p>Viens faire du ski !</p>
                    </div>
                    <button>S'inscrire</button>
                </div>
            </div>
            <div className="hero-image"></div>
        </div>
    );
}

export default Hero;