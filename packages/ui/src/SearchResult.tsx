import React from 'react'
import {Course} from './common_utilites/Types/Course'
import Item from './Item'

interface SearchResultProps {
    filteredResults: Course[];
  }

let SearchResult = (items)=>{

console.log(`the value received is`,JSON.stringify(items.props))
return (<>

        <div style ={{
                marginTop:'2px',
                color:'black',
                position:'absolute',
                width:'100%',
                top:'100%',
                background:'#E3D026',
                padding:'0px',
                paddingBottom:'0px',
                
        }}>
        {items.props.map((course)=>{
                console.log(`Inside the items ${course.title}`)
                return <Item prop = {course.title} key={course.id}/>
        })}   
        </div>
      
</>)
}

export default SearchResult