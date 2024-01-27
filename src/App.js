import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './Contact.js';
function App() {
  return (
    <>
    <body>
    <Router>
    <Header/>
      <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path='/About' element={<About/>} />
          <Route path='/Home' element={<Home/>}  />
          <Route path='/Contact' element={<Contact/>}/>
        </Routes> 
    </Router>
    <Footer/>

</body>
   
   
    </>
  )
    
}

export default App;
