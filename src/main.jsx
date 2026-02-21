import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from "./components/Home/Home.jsx";
import PotatoDisease from "./components/potatoDisease/PotatoDisease.jsx";
import Caltivation from "./components/caltivation/Caltivation.jsx";
import About from "./components/others/About.jsx";
import Auth from "./components/auth/Auth.jsx";
import SingleDisease from "./components/potatoDisease/SingleDisease.jsx";
import Detection from "./components/detection/Detection.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<StrictMode><Auth/></StrictMode>}/>
      <Route path='/' element={<StrictMode><App/></StrictMode>}>
        <Route index element={<Home/>}/>
        <Route path='potatoDisease' element={<PotatoDisease/>}/>
        <Route path='singleDisease/:diseaseId' element={<SingleDisease/>}/>
        <Route path='caltivation' element={<Caltivation/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='detection' element={<Detection/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
