import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CompatibleTest from './pages/CompatibleTest';
import HairTransplent from './pages/HairTransplent';


function App() {

  const [navColor, SetNavColor] = useState('rgba(255, 99, 71,0)');
  const [windowSize, SetWindowSize] = useState();
  const[scrollPosOff,SetScrollPos]=useState(false);

  const[scrolled,SetScrolled]=useState(false);

  
  useEffect(()=>{

    SetWindowSize(window.innerWidth)
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // cleanup this component
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  },[])

   function handleScroll(){
    let scrollPos = window.scrollY;

    SetScrolled(scrollPos)
    if(scrollPos === 0){
      SetScrollPos(false)

      SetNavColor('rgba(255, 99, 71,0)')
    }
    else{
      SetScrollPos(true)
      SetNavColor('rgb(229,225,255,.6)')
    }
    
  }


  function handleResize(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth)

    SetWindowSize(windowWidth)
    
  }


  return (
    <div className="App">
<div className='decorate'></div>
<head>
<style>

  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
</style>
</head>
      <body>
      <BrowserRouter>
      <Navigation scrollPosOff={scrollPosOff} windowSize = {windowSize} color = {navColor}></Navigation>
      
      <Routes>
        <Route path="/*" element={<Main windowSize = {windowSize} scrolled={scrolled}/>}></Route>
        <Route path="/About" element={<About windowSize = {windowSize}  scrolled={scrolled}/>}></Route>
        <Route path="/Contact" element={<Contact windowSize = {windowSize}/>}></Route>
        <Route path="/Transplent" element={<HairTransplent />}></Route>
        <Route path="/compatible" element={<CompatibleTest />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
