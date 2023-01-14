import React from "react";
import FormWrapper from "./FormWrapper";

export default function StepFivePrice() {
  return (
    <FormWrapper title="Step 5 - Enter Price & Discount">
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        Price
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USD
          </span>
        </div>
      </div>

      <label
        htmlFor="discount"
        className="block text-sm font-medium text-gray-700"
      >
        Discount
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="range"
          name="discount"
          id="discount"
          className="w-full"
          min={0}
          max={100}
          step={5}
          defaultValue={0}
          aria-describedby="price-discount"
        />
        <div className="flex w-full justify-between px-2 text-xs">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
    </FormWrapper>
  );
}
