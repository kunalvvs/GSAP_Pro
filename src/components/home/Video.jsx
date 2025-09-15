import React from 'react'

const Video = () => {
  return (
  <div className='h-full w-full'>
  {/* In Vite, assets under public/ are served from root at runtime */}
  <video className='h-full w-full object-cover' autoPlay loop muted playsInline src="/video.mp4"></video>
  </div>
  )
}

export default Video