import React from "react";
import { Link, } from "react-router-dom";
function Header(){
    return(
        <>
       <div id="menu-wrapper">
	<div id="menu">
		<ul>
			<li> <Link to="/Home">Home</Link> </li>
			<li> <Link to="/About">About </Link></li>
			<li><Link to={"/Contact"}>Contact</Link></li>
			{/* <li> <NavLink to="/Home">Home</NavLink></li> */}
			
		</ul>
	</div>
	
</div>
{/* <!-- end #menu -->  */}
<div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1>Vanshit Gupta Technolabs   </h1>
			<p>Template design by Vanshit Gupta </p>
		</div>
	</div>
</div>

	{/* <!-- end #header --> */}

        </>
    );
}
export default Header;