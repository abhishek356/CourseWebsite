import {selector} from 'recoil'
import {allCourses,userCourse} from './atoms'
import { Course } from '../Types/Course';


export let purchasedCourses = selector<Course[]>({

    key:'purchasedCourses',
    get:({get})=>{

        let courses:Course[] = get(allCourses);
        let purchasedCourse:number[]=get(userCourse)
        let userCourses:Course[] =[]
    
        userCourses = courses.filter(course=>{
            return  purchasedCourse.includes(course.id)
        })
       

        console.log(`the filtered value is `,userCourse)

        return userCourses        

    }
});