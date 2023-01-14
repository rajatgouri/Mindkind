import React from 'react'
import FormWrapper from './FormWrapper'

export default function StepSixQuantity() {
  return (
    <FormWrapper title="Step 6 - Enter Quantity">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Enter the desired number of Specials
      </label>
      <div className="mt-1">
        <input
          type="number"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="50"
        />
      </div>
      <label htmlFor="maxPerPerson" className="block text-sm font-medium text-gray-700">
      Set the maximum number of Specials allowed per person
      </label>
      <div className="mt-1">
        <input
          type="number"
          name="maxPerPerson"
          id="maxPerPerson"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm"
          placeholder="1"
        />
      </div>
    </FormWrapper>
  )
}
