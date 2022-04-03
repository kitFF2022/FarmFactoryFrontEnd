import React, {useState,useEffect} from 'react';
import './Home.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function Home() {
  const [isMobile, setisMobile] = useState(false);
  const resizingHandler = () => {
    if (window.innerWidth <= 1023) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setisMobile(true);
    }
    
    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);
  return (
    <div >
      <Header />
      <Body />
      <Footer/>
    </div>
    
  );
}

export default Home;
