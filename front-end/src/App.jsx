import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav"
import HomePage from "./home/HomePage"
import './App.css'
import { ScrollContext } from './nav/ScrollContext';

function App() {

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    let divTwoOffset = 160
    let divThreeOffset = 155
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      divTwoOffset -= 10;
      divThreeOffset -= 10;
    }
    if (elementId === "containerForAnimatedDivTwo") {
      const topPos = element.getBoundingClientRect().top + window.scrollY - divTwoOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
    else if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - divThreeOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <ScrollContext.Provider value={{ scrollToSection }}>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      </ScrollContext.Provider>
    </BrowserRouter>
  )
}

export default App
