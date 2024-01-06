import { useState } from 'react'
import AddDetail from './components/AddDetail'
import Card from './components/Card'

function App() {

  const [userData, setUserData] = useState({
    name: "Chotta Bheem",
    description: "Dholakpur ka don",
    interest: ['chutki', 'indumati', 'tun tun mosi', 'laddu', 'fighting'],
    skills: ['chutki', 'indumati', 'tun tun mosi', 'laddu', 'fighting'],
    githubLink: "http://github.com",
    linkedinLink: "http://linkedin.com",
    twitterLink: "http://twitter.com"
  })

  return (
    <div className='h-screen flex justify-center items-center'>
      <AddDetail userData={userData} setUserData={setUserData} />
      <Card userData={userData} />
    </div>
  )
}

export default App
