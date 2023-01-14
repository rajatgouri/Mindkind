import Stepper from "src/components/Stepper";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import PageContainer from "src/components/containers/PageContainer";
import { useMultistepForm } from "src/hooks/useMultistepForm";
import StepOneLocation from "src/components/multistep-form/StepOneLocation";
import StepTwoType from "src/components/multistep-form/StepTwoType";
import StepThreeList from "src/components/multistep-form/StepThreeList";
import StepFourDescription from "src/components/multistep-form/StepFourDescription";
import StepFivePrice from "src/components/multistep-form/StepFivePrice";
import StepSixQuantity from "src/components/multistep-form/StepSixQuantity";
import StepSevenValidity from "src/components/multistep-form/StepSevenValidity";
import StepEightPhotos from "src/components/multistep-form/StepEightPhotos";
import StepNineExpiration from "src/components/multistep-form/StepNineExpiration";

export default function create() {
  const { steps, currentStepIndex, step, isFirstStep,isLastStep, prev, next } = useMultistepForm([
    <StepOneLocation />,
    <StepTwoType />,
    <StepThreeList />,
    <StepFourDescription />,
    <StepFivePrice />,
    <StepSixQuantity />,
    <StepSevenValidity />,
    <StepEightPhotos  />,
    <StepNineExpiration />,
  ]);

  return (
    <PageContainer>
      <form>
        <div className="flex">
          <Stepper index={currentStepIndex} />
          <div className="flex flex-col p-4 justify-between">
            <div className="flex flex-col my-8">{step}</div>
            <span className="isolate inline-flex rounded-md shadow-sm">
              {!isFirstStep && (
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onClick={prev}
                >
                  <span className="sr-only">Previous</span>
                  <MdChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
              )}

              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onClick={next}
              >
                <span className="sr-only">{isLastStep ? "Finish" : ""}</span>
                <MdChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
      </form>
    </PageContainer>
  );
}
