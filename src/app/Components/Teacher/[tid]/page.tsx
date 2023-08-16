import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <>
     <h1>Teacher Id:{params.tid} </h1>

    </>
  )
}

export default page
