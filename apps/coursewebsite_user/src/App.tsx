"use client";
//import React from 'react';
import {CssBaseline} from "@mui/material";
//import axios from 'Axios';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Topbar from '@repo/ui/Topbar';
import SignUp from  '@repo/ui/SignUp';
import {HomePage} from './components/HomePage';
import {RecoilRoot} from 'recoil'
import { LoadData } from "@repo/ui/LoadData";
import {Login} from "@repo/ui/Login";
import {UserHomepage} from "@repo/ui/UserHomepage"
// import { useEffect } from "react";
// import { AllPublishedCourses } from "../../../packages/ui/src/common_utilites/CourseData";
// import {useSetRecoilState} from 'recoil';
// import { Course } from "../../../packages/ui/src/common_utilites/Types/Course";
// import { allCourses } from "../../../packages/ui/src/common_utilites/atoms/atoms";

export const App= ()=>{



  return(
    
    <Router>
      <RecoilRoot>
      <CssBaseline/>
      <LoadData/>
      <Topbar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path = '/SignUp' element = {<SignUp/>}/>
        <Route path ='/Login' element = {<Login/>}/>
        <Route path = '/UserHomepage' element = {<UserHomepage/>}/>
      </Routes>
      </RecoilRoot>
      
    </Router>
    
  )
}