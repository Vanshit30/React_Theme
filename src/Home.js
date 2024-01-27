import React from "react";

function Home(){
    return(
        <>
        
<div id="wrapper"> 
	
	<div id="page-bgtop"></div>
	<div id="page">
		<div><img src="images/pics01.jpg" width="920" height="300" alt="" /></div>
		<div id="content">
			<div className="post">
				<h2 className="title">This is Home Page  </h2>
			
				<div style={{clear: "both"}}>&nbsp;</div>
				<div className="entry">
				</div>
			</div>
			<div>This is home page all information is displayed here </div>
			
			
		
			<div style={{ clear:" both"}} >&nbsp;</div>
		</div>
		{/* <!-- end #content --> */}
		<div id="sidebar">
			<ul>
				<li>
					<h2>Categories</h2>
                    <ul>    
                    <li>React</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>C++</li>
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
export default Home;