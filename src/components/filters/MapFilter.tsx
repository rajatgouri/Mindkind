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
    <button className="w-auto px-2 rounded-full text-lg text-gray-500 font-bold border-4 hover:bg-gray-400">
          Today
    </button>
    <button className="w-auto px-2 rounded-full text-lg text-gray-500 font-bold border-4 hover:bg-gray-400 mx-12">
          Categories
    </button>
    <button className="w-auto px-2 rounded-full text-lg text-gray-500 font-bold border-4 hover:bg-gray-400">
          Price
    </button>
    </>
  )
}
