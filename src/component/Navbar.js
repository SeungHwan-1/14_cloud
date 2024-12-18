import {NavLink} from "react-router-dom";

const Navbar = () => {


    const activateStyle = {
        backgroundColor: "black",
        color:"white"
    };


    return(
        <>
        <ul>
            <li>
                <NavLink to="/" style={({isActive})=>
                isActive? activateStyle : null
            }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/menupage" style={({isActive})=>
                isActive? activateStyle : null
            }>MenuPage</NavLink>
            </li>
            <li>
                <NavLink to="/lunch" style={({isActive})=>
                isActive? activateStyle : null
            }>런1치</NavLink>
            </li>
        </ul>
        </>
    )

}

export default Navbar;