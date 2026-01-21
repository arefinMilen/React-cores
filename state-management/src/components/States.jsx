import React,{useState} from 'react'

const States= () => {
  const [count, setCount] = useState(0)
  const [Name, setName] = useState({firstName:"Samsul", lastName:"Arefin",type:"professional", age:25});
  return (
    <>
    
    <div className='flex items-center flex-col'>
      <h2 className='font-bold'>My {Name.type} name is : {Name.firstName} {Name.lastName} and age is:  {Name.age}</h2>
      <button className="border-gray-400 border-2 p-2 rounded-2xl bg-amber-100 text-orange-700 mt-4" 
      onClick={()=>setName({type:"NickName",firstName:"Milen",age:25})}
      >
        see my NickName
      </button>
    </div>
    <div className='p-4  flex items-center justify-center h-screen '>
      <div className='mt-3'>
        <h2 className='text-center text-white bg-gray-800 border rounded-xl p-2 mb-3'>Total count is : {count}</h2>
<button className='text-white bg-green-600 border rounded-xl p-2 mr-1' onClick ={()=>setCount(count+1)}>
increase it
      </button>
      <button className='text-white bg-red-800 border rounded-xl  p-2' onClick ={()=>setCount(count-1)}>
decrease it
      </button>
      </div>
      
    </div>
    </>
  )
}

export default States;
