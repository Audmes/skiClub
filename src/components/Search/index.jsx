import "./styles.scss";
import image from "../../assets/images/search.png";

/**
 * Render a Logo element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Search() {

    return (
        <div className="search-container">
            <img src={image} alt="Search logo" width={25} height={25}></img>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24.273" height="24.273" viewBox="0 0 24.273 24.273"><g transform="translate(-3 -3)"><path d="M11.091,5.7v5.394H5.7V5.7Zm2.7-2.7H4.348A1.348,1.348,0,0,0,3,4.348v9.439H13.788Z" fill="currentColor"></path><path d="M21.091,15.7v5.394H15.7V15.7Zm2.7-2.7H13V23.788h9.439a1.348,1.348,0,0,0,1.348-1.348Z" transform="translate(3.485 3.485)" fill="currentColor"></path><path d="M22.439,3H13V13.788H23.788V4.348A1.348,1.348,0,0,0,22.439,3Zm-1.348,8.091H15.7V5.7h5.394Z" transform="translate(3.485)" fill="currentColor"></path><path d="M11.091,13H3v9.439a1.348,1.348,0,0,0,1.348,1.348h9.439V13Zm0,8.091H5.7V15.7h5.394Z" transform="translate(0 3.485)" fill="currentColor"></path></g></svg>
        </div>
    );
}

export default Search;