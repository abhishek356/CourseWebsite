import { AllPublishedCourses } from './common_utilites/CourseData'
import { useEffect } from 'react';
import { Course } from './common_utilites/Types/Course';
import {allCourses} from './common_utilites/atoms/atoms';
import { useSetRecoilState } from 'recoil';

export const LoadData = ()=>{


    let setCourses = useSetRecoilState<Course[]>(allCourses);
  
    useEffect(()=>{
 
 
      console.log(`this is LoadData component`)
       let  loadCourse =async()=>{
            setCourses(await AllPublishedCourses());
           
  }
 
  loadCourse();
    },[])
   


    return(<>
    

    </>)


}