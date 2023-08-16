"use client"


import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'


function page({params}) {

  const id =params.studentdtl

  const [users,setusers]=useState("")

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
      console.log(response.data.data[id]);

      if(users !== undefined){
        setusers(response.data.data[id])

        // console.log(typeof(users))

      }

    })
    .catch((error) => {
      console.log(error);
    });
    
       
    },[])


console.log(users,"this is user")

  return (
    <>

<div className='flex justify-center py-32'>
  
  
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <i>Name : </i>{users.name} <br /> <i>Father : </i> {users.fname} <br /> <i>Age : </i>{users.Age} <br /> <i>course : </i> {users.course}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
    </div>
</a>

  
  </div>     


 
    </>
  )
}

export default page
