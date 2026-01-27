import React from 'react'

const LocalStorage = () => {
  //setItem
    const userName = localStorage.setItem('name','samsul arefin')
    
//getItem
const myName = localStorage.getItem('name')
console.log(myName)

//removeItem
const removeName = localStorage.removeItem("name")
console.log(removeName)

//clear all 
localStorage.clear();

//stringyfy and parse for object and arrays
const Info = {
    day: 'monday',
    month: 'january',
    year: '2k26'
}
localStorage.setItem('Info',JSON.stringify(Info))
console.log(JSON.parse(localStorage.getItem('Info')))

  return (
    <div>
app
    </div>
  )
}

export default LocalStorage
