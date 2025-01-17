import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies = useSelector(store=> store.movies?.nowPlayingMovies)


  if(!movies) return
  const mainMovie = movies[1]

  
  const {original_title,overview,id} = mainMovie

  return (
     <div className=''>
      
       <VideoTitle id={id}/>
        <VideoBackground title={original_title} overview={overview}/>
       
    </div>
  )
}

export default MainContainer