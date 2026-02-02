import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const CallingApi = () => {
    const [data, setData] = useState([]);
    
   async function getData(){
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log((await response.json()));
    }
    
    const handleClick = async () => {
       const userData =  await axios.get("https://jsonplaceholder.typicode.com/posts")

       setData(userData.data);


    }
  return (
    <div>
      <button
       onClick={() => {getData();handleClick();}} 
       className='border-2 p-2 rounded-lg bg-blue-500 text-white mt-5'>
        get data
      </button>
      <div className='flex gap-2 flex-wrap'>
        {data.map((item,idx) => {
            return <h3> {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default CallingApi
