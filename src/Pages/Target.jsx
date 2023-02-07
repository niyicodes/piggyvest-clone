import React, { useEffect } from 'react'

const Target = () => {
  useEffect(() => {
    document.title = "Smart Target Savings™ - PiggyVest";
  }, []);
  return (
    <div>Target</div>
  )
}

export default Target