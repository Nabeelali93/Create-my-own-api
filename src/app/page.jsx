"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'


export default function Home() {
  const route=useRouter()

  const [users,setusers]=useState([])

  useEffect(() => {

    const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/test',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);

      setusers(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
    
       
    },[])




  return (

    <>


<div className='flex justify-around py-5'>

{
  users.map((v,i)=>{
    return (
      <>
      <div className='bg-gray-300 outline w-36 h-24 text-center'>
<h1 className='text-2xl font-serif'>{v.name}</h1>

<button onClick={()=>route.push(`./Components/Student/${i}`)}> Details</button>

      </div>
      
      </>
    )

  })
}
</div>

    </>

  )
}
