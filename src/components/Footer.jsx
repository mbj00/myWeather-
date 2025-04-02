import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} MyWeather. All rights reserved.</p>
      <p className="text-xs">Powered by OpenWeather API</p>
    </footer>
  )
}

export default Footer
