import React from 'react'
import Home from '../components/pages/home/Home';
import AboutMe from '../features/aboutMe/AboutMe';
import ContectMe from '../pages/contectMe/ContectMe';
import MyProjects from '../pages/myProjects/MyProjects';
import {Routes , Route} from "react-router-dom"; 
const RoutersScreen = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about Me' element={<AboutMe/>}/>
        <Route path='contect ME' element={<ContectMe/>}/>
        <Route path='myProjects' element={<MyProjects/>}/>
      </Routes>
  )
}

export default RoutersScreen;