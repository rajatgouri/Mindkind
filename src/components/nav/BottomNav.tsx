import React from 'react'
import {
  MdOutlineStore,
    MdOutlineHowToVote,
    MdCheckCircleOutline,
    MdWindow,
  } from "react-icons/md";

export default function BottomNav() {
  return (
    <>

    <div className='ms:block sl:hidden bottom-nav'>
    <button className="w-16 rounded-md text-center text-sm font-bold hover:bg-gray-300">
          <MdCheckCircleOutline className="m-auto text-3xl text-black" />
          Validate
        </button>
        <button className="ml-5 w-18 rounded-md text-center text-sm font-bold hover:bg-gray-300">
          <MdOutlineHowToVote className="m-auto text-3xl text-black" />
          Community
        </button>
        <button className="ml-5 w-18 rounded-md text-center text-sm font-bold hover:bg-gray-300">
          <MdWindow className="m-auto text-3xl text-black" />
          Opportunities
        </button>
        <button className="ml-5 w-18 rounded-md text-center text-sm font-bold hover:bg-gray-300">
          <MdOutlineStore className="m-auto text-3xl text-black" />
          Account
        </button>
      </div>
    </>
  )
}
