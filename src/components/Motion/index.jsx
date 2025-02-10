import "./styles.scss";
import image from "../../assets/images/insta.png";

/**
 * Render a Motion element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Motion() {

    return (
        <div className="motion-container">
            <div className="motion-insta">
                <a href="https://www.instagram.com/ski_club_roannais/" target="_blank" title="Aller voir notre Instagram">
                    <img src={image} alt="Search logo" width={40} height={40}></img>
                </a>
            </div>
            <div className="motion-slides">
                <img src={require('../../assets/images/motion/motion1.webp')} alt="motion image 1" ></img>
            </div>
            <div className="motion-slides">
                <img src={require('../../assets/images/motion/motion2.webp')} alt="motion image 2" ></img>
            </div>
            <div className="motion-slides">
                <img src={require('../../assets/images/motion/motion3.webp')} alt="motion image 3" ></img>
            </div>
            <div className="motion-slides">
                <img src={require('../../assets/images/motion/motion4.webp')} alt="motion image 4" ></img>
            </div>
            <div className="motion-slides">
                <img src={require('../../assets/images/motion/motion5.webp')} alt="motion image 5" ></img>
            </div>
            <div className="motion-slides">
                <img src={require('../../assets/images/motion/motion6.webp')} alt="motion image 6" ></img>
            </div>
        </div>
    );
}

export default Motion;