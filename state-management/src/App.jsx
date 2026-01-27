import React from 'react'
import States from './components/States'
import Notes from './components/Notes.jsx'
import LocalStorage from './components/LocalStorage.jsx'

const App = () => {
  return (
    <div>
      <States />
      <Notes  />
      <LocalStorage />
    </div>
  )
}

export default App
