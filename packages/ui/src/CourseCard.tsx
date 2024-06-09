import React from 'react'
import {Box, Card, CardContent,CardMedia} from '@mui/material'
import {SignUpButton} from './custom'
import { Course } from './common_utilites/Types/Course'

export let CourseCard=(item)=>{

    return(<>
    <div>
        <Card>
            <CardContent>
                <CardMedia sx={{
                    height:140
                }}
                image = {item.props.imageLink}/>
                <SignUpButton>
                    View Course
                </SignUpButton>
            </CardContent>
        </Card>
    </div>

    </>)

}