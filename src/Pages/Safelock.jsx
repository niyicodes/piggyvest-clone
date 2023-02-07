import React, { useEffect } from 'react'

const Safelock = () => {
  useEffect(() => {
    document.title = "Lock funds with Safelock™ - PiggyVest";
  }, []);
  return (
    <div>Safelock</div>
  )
}

export default Safelock