import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friend from './Friend'

function App() {

  const friendlist=[
    {name: "Aarti Gujjarwar", companyName:"Microsoft"},
    {name:"Sapna Patankar",companyName:"Google"},
    {name:"sakshi Salve",companyName:"Wipro"}
  ]

  return (
    <>
      {/*<Friend></Friend> */}
      <h1 title='these are my friend'> Friend list</h1>
      {
      friendlist.map((friend,index)=>{
       const {name,companyName} = friend;
       return <friend key={index} name={name}
       compantNamr={companyName} />
    })
  }
  {
    [
      <friendname = "aarti"/>
    ]
  }
 </>     
)
}

export default App

