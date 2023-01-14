import React from "react";
import FormWrapper from "./FormWrapper";

export default function StepTwoType() {
  const cards = [
    {
      title: "Gift Card",
      underText: "Valid on any item, at any time",
    },
    {
      title: "Special",
      underText: "Valid on specific items, at a specific time",
    },
  ];
  return (
    <FormWrapper title="Step 2 - Choose a type of deal">
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className=" text-center font-bold text-gray-900">
                {card.title}
              </p>
              <p className="mt-4 truncate text-sm text-gray-500">
                {card.underText}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  </FormWrapper>
  );
}
