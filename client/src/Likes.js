import React, { useState } from 'react'
import LikeTotal from './LikeTotal'

function Likes(props) {
  const [totalLikes, setTotalLikes] = useState(0)
  function incrementLikes() {
    setTotalLikes(totalLikes + 1)
  }

  return (
    <>
      <LikeTotal totalLikes={totalLikes} />
      <button className="increment" onClick={incrementLikes}>
        Like
      </button>
    </>
  )
}

export default Likes
