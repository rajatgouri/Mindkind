import React from 'react'
import {
    MdFavoriteBorder,
    MdOutlineLocalFireDepartment,
    MdOutlineLocationOn,
    MdTimer,
  } from "react-icons/md";

export default function ListFilter() {
  return (
    <>
    <button className="w-16 rounded-md text-center text-lg font-bold hover:bg-gray-300">
          <MdTimer className="m-auto text-3xl text-black" />
          New
          <div className="border-b-2 border-black"></div>
        </button>
        <button className="ml-14 w-16 rounded-md text-center text-lg font-bold hover:bg-gray-300">
          <MdOutlineLocalFireDepartment className="m-auto text-3xl text-black" />
          Hot
        </button>
        <button className="ml-14 w-16 rounded-md text-center text-lg font-bold hover:bg-gray-300">
          <MdOutlineLocationOn className="m-auto text-3xl text-black" />
          Around
        </button>
        <button className="ml-14 w-16 rounded-md text-center text-lg font-bold hover:bg-gray-300">
          <MdFavoriteBorder className="m-auto text-3xl text-black" />
          Jazzed
        </button>
    </>
  )
}
