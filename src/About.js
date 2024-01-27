import React from "react";
function About(){
    return(
        <>
        
<div id="wrapper"> 
	
	<div id="page-bgtop"></div>
	<div id="page">
		<div><img src="images/pics01.jpg" width="920" height="300" alt="" /></div>
		<div id="content">
			<div className="post">
				<h2 className="title">This is About us Page  </h2>
			
				<div style={{clear: "both"}}>&nbsp;</div>
				<div className="entry">
				</div>
			</div>
			<div>This is About us  page all information is displayed here </div>
		
			<div style={{ clear:" both"}} >&nbsp;</div>
		</div>
		{/* <!-- end #content --> */}
		<div id="sidebar">
			<ul>
				<li>
					<h2>Categories</h2>
					<ul>
						<li>Contact</li>
						<li>Address</li>
						<li>Email</li>
					</ul>

					
				</li>
				
			</ul>
		</div>
		{/* <!-- end #sidebar --> */}
		<div style={{clear: "both"}}>&nbsp;</div>
	</div>
	<div id="page-bgbtm"></div>
	{/* <!-- end #page -->  */}
</div>

        
        </>
    );
}
export default About