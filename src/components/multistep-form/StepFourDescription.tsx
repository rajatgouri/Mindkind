import React from "react";

import FormWrapper from "./FormWrapper";

export default function StepFourDescription() {
  return (
    <FormWrapper title="Step 4 - Write a clear description">
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700"
      >
        Add your comment
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={""}
        />
      </div>
    </FormWrapper>
  );
}
