import React from "react";

import FormWrapper from "./FormWrapper";

function addInput() {
  return (
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type="number"
        placeholder="1"
        className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
      />
      <input
        type="text"
        name="company-website"
        id="company-website"
        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Box of 12 chocolates"
      />
    </div>
  );
}

export default function StepThreeList() {
  return (
    <FormWrapper title="Step 3 - Add what’s included">
      <label
        htmlFor="company-website"
        className="block text-sm font-medium text-gray-700"
      >
        What's included?
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="number"
          placeholder="1"
          className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
        />
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Box of 12 chocolates"
        />
      </div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="number"
          placeholder="1"
          className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
        />
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Box of 12 chocolates"
        />
      </div>
    </FormWrapper>
  );
}
