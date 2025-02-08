import "./styles.scss";
import snowflake from "../../assets/images/snow.png"

/**
 * Render a Logo element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Logo() {

    return (
        <div className="logo-container">
            <img src={snowflake} alt="Snow Flake" width={21} height={25}></img>
            <p className="logo-text">SKI CLUB DU ROANNAIS</p>
        </div>
    );
}

export default Logo;