import React from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';

const Content = () => {

  const handleGetImage = () => {
    console.log("Message function is called")
    axios.get("http://localhost:5000/sendMessage")
      .then((res) => {
          localStorage.setItem("url", res.data.url)
      }) 
  };

  const handleMailFunc = () => {
    console.log("Mailer function is called!")
    axios.get("http://localhost:5000/sendMessage")
      .then()
  }

  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
        <motion.h1
          initial = {{ opacity: 0, y : -100}}
          animate = {{ opacity: 1 , y : 0}}
          transition={{ duration: 1 }} 
          className="text-white text-4xl md:text-6xl font-bold mb-20">
          AstroSnap
        </motion.h1>
        <div className="flex space-x-4">
          <motion.button 
            initial = {{ opacity : 0, x : -100}}
            animate = {{ opacity : 1, x : 0}}
            transition={{ duration : 1.5}}
            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow-md" onClick={handleGetImage}>
            Get Message
          </motion.button>
          <motion.button
            initial = {{ opacity : 0, x : 100}}
            animate = {{ opacity : 1, x : 0}}
            transition={{ duration : 1.5}} 
            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow-md" onClick={handleMailFunc}>
            Enter Email
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Content
