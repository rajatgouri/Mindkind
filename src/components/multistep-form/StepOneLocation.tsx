import React from "react";
import FormWrapper from "./FormWrapper";

export default function StepOneLocation() {
  const plans = [
    {
      id: "small",
      name: "Store",
      description: "21628 Villa Pacifica Cir, Carson",
    },
    {
      id: "medium",
      name: "Farmer's Market",
      description: "301 W Broadway, Long Beach",
    },
  ];
  return (
    <FormWrapper title="Step 1 - Select at least one location">
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5 bg-white p-8 rounded-xl shadow-lg">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id={plan.id}
                aria-describedby={`${plan.id}-description`}
                name="location"
                type="radio"
                defaultChecked={plan.id === "small"}
                className="h-4 w-4 border-gray-300 text-brand focus:ring-brand"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={plan.id} className="font-medium text-gray-700">
                {plan.name}
              </label>
              <span id={`${plan.id}-description`} className="text-gray-500 ml-4">
                {plan.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  </FormWrapper>
  );
}
