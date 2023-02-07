import React, { useEffect } from 'react'

const Stories = () => {
  useEffect(() => {
    document.title = "PiggyVest Stories™ - PiggyVest";
  }, []);
  return (
    <div>Stories</div>
  )
}

export default Stories