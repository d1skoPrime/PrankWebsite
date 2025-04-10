import { useState } from 'react'
import './global/index.css'

function App() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const clickPlaySound = () => {
    if (!isPlaying) {
      const newAudio = new Audio('/stony.mp3')
      newAudio.loop = true // repeat forever
      newAudio.play()
      setAudio(newAudio)
      setIsPlaying(true)
    } else {
      audio?.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="bg-[#242424] w-full h-screen flex justify-center items-center flex-col">
      <h1 className='text-4xl text-white font-bold mb-50 text-center'>Welcome To This Simple Website!</h1>
      <div className="flex w-90 h-50 bg-[#303030] justify-center items-center rounded-xl">
        <button
          onClick={clickPlaySound}
          className='bg-blue-600 px-5 py-2 font-bold text-2xl text-white rounded-lg transition-colors duration-700 hover:bg-blue-800 cursor-pointer hover:text-gray-400'>
          {isPlaying ? 'Stop' : 'Text Me'}
        </button>
      </div>
    </div>
  )
}

export default App
