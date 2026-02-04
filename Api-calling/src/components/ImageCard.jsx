import React, { useEffect, useState } from 'react'

const ImageCard = () => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(1)
  const getImage = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setImages(await response.json());
    // console.log(await response.json());
  }
  useEffect( () => {
    getImage();
  },[index])
  let userData = <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</div>
  if(images.length > 0) {
    userData = images.map( (item, index) => {
      return <div key={index} className="p-2">
        <a href={item.url} target='_blank' className='text-blue-400 underline'><img src={item.download_url} alt={item.author} className="w-30 h-30 object-cover rounded-2xl" /></a>
        
        <h3 className='text-center'>{item.author}</h3>
         </div>
    })
  }
  return (
    <div className = "bg-black overflow-auto h-screen p-4 text-white">
      <h2>hi there how are you</h2>
      {/* <button onClick ={getImage} className='border-2 p-2 rounded-lg bg-green-500 text-white mt-5'>
        Get Images
      </button> */}
      <div className='flex h-[80%] flex-wrap gap-2'>
        {userData}
      </div>
      <div className='flex gap-4 justify-center mb-4'>
        <button
         onClick={() => 
         {if(index>1){
          setIndex(index-1)
          setImages([])
         }}
         } 
         className='p-2 bg-amber-600 rounded-lg text-white active:scale-95' >         
          prev
        </button>
        <h2>Page {index} </h2>
        <button
          onClick={() => {
            setImages([])
            setIndex(index + 1)
            
          }}
         className='p-2 bg-amber-600 rounded-lg text-white active:scale-95'>
          next
        </button>
      </div>
    </div>
  )
}

export default ImageCard