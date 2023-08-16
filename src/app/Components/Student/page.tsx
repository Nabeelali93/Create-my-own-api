"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function page() {

const [data,setdata] = useState(789)

const [data1,setdata1] = useState(456)

  return (
    <>

     <Link href={`./Student/${data}`}>Student id:</Link>


     <Link href={`./Teacher/${data1}`}>Teacher id:</Link>


    </>
  )
}

export default page
