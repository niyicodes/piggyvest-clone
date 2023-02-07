import React, { useEffect } from 'react'

const Piggybank = () => {
  useEffect(() => {
    document.title = "Save Automatically on PiggyVest™ - PiggyVest";
  }, []);
  return (
    <div>Piggybank</div>
  )
}

export default Piggybank