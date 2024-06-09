import React from 'react'
import { purchasedCourses } from './common_utilites/atoms/purchasedCourses';
import {useRecoilValue} from 'recoil';
import { CourseCard } from './CourseCard';
import { Box } from '@mui/material';
export const UserHomepage = ()=>{

    let courses = useRecoilValue(purchasedCourses)
    console.log(`the value of courses in userhomepage are`,courses)
    return(<>
    
   <div>
    {courses.map(course=>{
        return <CourseCard key ={course.id} props={course}/>
    })}
   </div>

    </>);
}
