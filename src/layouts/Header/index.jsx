import "./styles.scss";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Search from "../../components/Search";

/**
 * Render a Header element
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

// import { logout } from '../../store/actions/auth.actions';

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       document.querySelector('header').style.padding = "10px 25px";
//     } else {
//       document.querySelector('header').style.padding = "20px 25px";
//     }
// }
  
// window.onscroll = function() { scrollFunction() };

function Header () {
    /* Updates user data on header component from state redux */
    // const isConnected = useSelector((state) => state.auth.token);
    // const firstname = useSelector((state) => state.user.userData.firstname);

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const signOut = () => {
    //     dispatch(logout());
    //     /* Take off for don't clear the storage */
    //     sessionStorage.clear();
    //     localStorage.clear();
    //     navigate('/');
    // }

    return (
        <header>
            < Logo />
            < Nav />
            < Search />
        </header>
    );
}

export default Header;