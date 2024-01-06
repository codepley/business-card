import { useState } from 'react'
import AddDetail from './components/AddDetail'
import Card from './components/Card'

function App() {

  const [userData, setUserData] = useState({
    name: "John Doe",
    description: "A MERN Dveloper",
    interest: ['Frontent', 'Backend', 'Open Source', 'UI/UX', 'Mobile App'],
    skills: ['React', 'MongoDB', 'NodeJS', 'ExpressJS', 'Kotlin'],
    githubLink: "http://github.com",
    linkedinLink: "http://linkedin.com",
    twitterLink: "http://twitter.com"
  })

  return (
    <div className='min-h-screen bg-green-200 flex md:flex-row flex-col'>
      <AddDetail userData={userData} setUserData={setUserData} />
      <Card userData={userData} />
    </div>
  )
}

export default App
