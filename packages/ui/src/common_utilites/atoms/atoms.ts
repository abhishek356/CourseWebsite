import {atom,RecoilState} from 'recoil'
import { Course,Cred } from '../Types/Course'


export let allCourses = atom<Course[]>({
    key :'allCourses',
    default:[]
})

export const userCred = atom<Cred>({
    key:'userCred',
    default:undefined
})

export const userCourse = atom<number[]>({
    key:'userCourse',
    default:[]
})