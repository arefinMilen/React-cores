import React from 'react'
import { User } from 'lucide-react'
const Profiles = () => {
  return (
    <div className='p-4 bg-gray-200'>
        <div className='p-3 border-gray-400 border-2 rounded-2xl w-120 h-150 bg-white'>
        <div className='flex justify-between'>
            <h2 className='bg-green-500 text-white '>available</h2>
            <h3>$40/hr</h3>
        </div>
        <div className='flex flex-col items-center gap-2 my-4'>
            <img className='w-40 h-40 rounded-full object-fill ' src="https://images.unsplash.com/photo-1652781269535-f13e466904a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGQlMjBwaG90b3MlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="profile"/>
            <h2>Maria</h2>
            <h3>mobile designer</h3>
            <h4>freelancer</h4>
        </div>
        <div className='items-center '>
            <span className='m-2'>PHP</span>
            <span className='m-2'>JavaScript</span>
            <span className='m-2'>React</span>
            <span className='m-2'>Node.js</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, cumque!</p>

        </div>
        <div>
            <hr />
            <button>View Profile</button>
        </div>
        </div>
    </div>
  )
}

export default Profiles
