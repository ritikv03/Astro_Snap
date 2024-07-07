import React from 'react';
import axios from 'axios';

const handleFetch = () => {
  console.log("Fetch function is called");
  axios.get("http://localhost:5000/fetch")
      .then((res) => {
          Cookies.set("url", res.data.url);
          Cookies.set("explanation", res.data.explanation);
          Cookies.set("title", res.data.title);
          Cookies.set("date", res.data.date);
      })
      .catch((error) => {
          console.error("There was an error fetching the data:", error);
      });
}

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <nav className="mt-4 sm:mt-6 lg:mt-8 mb-20 flex items-center justify-between py-4 sm:py-6 px-4 lg:px-12 bg-transparent">
      <div className="flex items-center gap-4 ml-4 lg:ml-10">
        <a href="/" className="cursor-pointer">
            <h1 className="font-bold text-3xl text-white">AS</h1>
        </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mr-4 lg:mr-10">
          <button onClick={handleFetch} className="text-white text-xl sm:text-2xl relative group">
            Fetch_Data
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-800 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
