'use client'
import songs from './array';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';


const Exercise = () => {

  return (
    <>
      <AudioPlayer songs={songs} />
    </>
  )
}

export default Exercise;