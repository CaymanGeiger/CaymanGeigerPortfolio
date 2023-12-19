import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav"
import HomePage from "./home/HomePage"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
