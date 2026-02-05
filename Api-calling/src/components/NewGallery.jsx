import React, { useState,useEffect } from 'react'
import axios from 'axios'

const NewGallery = () => {
    const [gallery, setGallery] = useState([])
    const [img, setImg] = useState(null)
  const fetchImages = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setGallery(response.data)
        console.log(response.data)
    }

    const newGallery = async () => {
        const getImg = await axios.get("https://picsum.photos/seed/picsum/info")
        setImg(getImg.data);
        console.log(getImg)
    }
    useEffect( () => {
        {fetchImages()}
        {newGallery()}
    },[])
    // let userImg = <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</div>
      
    
  return (
    <div>
      {/* <button className="p-2 bg-amber-500 m-2 border-amber-50 rounded-md active:scale-90">Fetch Images</button> */}
      <div className="flex gap-2 flex-wrap ">
        {gallery.map( (item, index) => {
         return <div key={index} >
            <h3 className='border-2 p-2 text-white bg-green-400 rounded-lg mb-2'>{item.username}</h3>
            <div className='flex flex-col justify-between border-2 border-amber-400  p-2 text-white bg-blue-400 rounded-lg mb-2 w-40 h-40'>
            <div>             
            {item.address.street} 
            </div> 
            <div>
            {item.address.suite} 
            </div>
            <div>
            {item.address.city}
            </div>
            <div>
            {item.address.zipcode}</div>
            </div>
            <div>
                <div>{item.address.geo.lat}</div>
                <div>{item.address.geo.lng}</div>
            </div>
            <div>
             
            </div>
            </div>
        })}
      </div>
      <div>
    
        <div className="mt-5 p-4 border-t">
                <h2 className="font-bold">Featured Image Info:</h2>
                {img ? (
                    <div>
                        <p>Author: {img.author}</p>
                        <img src={img.download_url} alt={img.author} className='w-40 h-40 object-cover rounded-lg' />

                         </div>
                ):
                <p>No image data available</p>
                }
            </div>
    
      </div>
    </div>
  )
}

export default NewGallery
