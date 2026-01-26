import React, { useState } from 'react'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState([])
  
  const handleAddNote = (e) => {
    e.preventDefault()
    const newNote = [...notes]
    newNote.push({title, details})
    setNotes(newNote)
    setTitle('')
    setDetails('')
  }
  const delNote = (index) => {
    const delNotes = [...notes]
    delNotes.splice(index,1)
    setNotes(delNotes)
  }
  return (
    <div className='lg:flex justify-between h-screen'>
      <div className='w-1/3  flex flex-col items-start'>
        <h2 className='text-[15px] lg:text-2xl font-bold mb-4 ml-5 w-full'>Add your notes:</h2>
        <form className='flex flex-col' onSubmit={(e) =>{handleAddNote(e)}}>
        <input
         type="text"
         placeholder='note title'
         className='border-2 p-2 rounded-lg w-80 m-4'
         value={title}
         onChange ={(e)=>{
         setTitle(e.target.value)
          }}
        />
        <textarea
         placeholder='note details'
          className='border-2 p-2 rounded-lg w-80 m-4'
          value={details}
          onChange={(e)=> {
            setDetails(e.target.value)
          }}
          />       
        <button className='active:scale-90 transition-transform delay-100 ease-in-out border-2 p-2 m-3 rounded-lg bg-blue-500 text-white'>Add Note</button>
        </form>
      </div>
      
      <div className='lg:w-3/4 h-screen border-l-2
      border-gray-300  flex  flex-col gap-3'>
        <h2 className='text-2xl font-bold ml-8'>Recent notes: </h2>
        <div className='flex flex-wrap gap-4'>
        
        {notes.map((note, index)=> {
          return (
            <div key={index} className='flex flex-col justify-between w-50 h-50 border-black bg-[url("https://img.freepik.com/free-vector/leafy-patterned-note-background_53876-97734.jpg?semt=ais_hybrid&w=740&q=80")] bg-cover overflow-scroll  rounded-2xl ml-3'> 
            <div>
              <span className='pt-4 ml-5 font-bold'>{note.title}</span>
              <p className='pt-5 ml-5 '>{note.details}</p>
            </div>
              <div className="items-center flex justify-center">
                <button onClick={()=>{
                  delNote(index)
                } } className='active:scale-90 transition-transform delay-100 ease-in-out border-2 p-2 m-3 rounded-lg bg-red-500 text-white cursor-pointer'>Delete</button>
              </div>
            </div>
          )
        })}
        </div>
      
      </div>
      
    </div>
  )
}

export default Notes
