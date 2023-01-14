import React from 'react'
import Thumbnails from './Thumbnails'
import FlipMove from "react-flip-move";

type Props = {
    results:{
        id:string
    }[]
}

const Results = ({results}: Props) => {
  return (
    <FlipMove>
 <div className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center ' >
        {results?.map(result=>(
            <div key={result?.id} >
              <Thumbnails 
             result={result} />

            </div>
            
        ))}
    </div>
    </FlipMove>
   
  )
}

export default Results