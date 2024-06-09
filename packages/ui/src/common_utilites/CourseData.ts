import axios from 'axios'
import { Course } from './Types/Course';
import { BASE_URL} from './utilites';

export const AllPublishedCourses = async () =>{

    let publishedCourses:Course[] = []

try{

   let res = await axios.post(`${BASE_URL}`+'/loadCourses')
   publishedCourses = res.data;
   console.log(`data fetched from the backend is  ${JSON.stringify(publishedCourses)}`);


}
catch(e)
{
    console.log('error occured while fetching data' +  e)
}

return publishedCourses;

}