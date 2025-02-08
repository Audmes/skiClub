import "./styles.scss";
import data from "../../datas/data.json";

/**
 * Render a Nav element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

const nav = data.nav[0];
const home = nav['home'];
const about = nav['about'];
const events = nav['events'];
const stage = nav['stage'];
const tarifs = nav['tarifs'];
const contact = nav['contact'];

function Nav() {

    return (
        <div className="menu">
            <nav className="nav">
                <ul>
                    <li><a href="#">{ home }</a></li>
                    <li className="dropdown"><a href="#">{ about }</a></li>
                    <li><a href="#">{ events }</a></li>
                    <li><a href="#">{ stage }</a></li>
                    <li><a href="#">{ tarifs }</a></li>
                    <li><a href="#">{ contact }</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;