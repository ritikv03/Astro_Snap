import React from 'react'

const Content = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-20">AstroSnap</h1>
        <div className="flex space-x-4">
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow-md">
            Get Image
          </button>
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow-md">
            Enter Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default Content
