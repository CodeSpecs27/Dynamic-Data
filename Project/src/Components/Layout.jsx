import React from "react"
import data from '../Data/data.json'
import {Header} from './Header'


export const Layout = () => {
  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
           <Header heading={data.school_name} subHead={data.class}/>
        </div>
      </div>
    </>
  );
}
