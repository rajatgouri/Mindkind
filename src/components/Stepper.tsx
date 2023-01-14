import { MdCheckCircle,  } from "react-icons/md";

const steps = [
  { name: "Location", status: "current" },
  { name: "Type", status: "upcoming" },
  { name: "List", status: "upcoming" },
  { name: "Description", status: "upcoming" },
  { name: "Price", status: "upcoming" },
  { name: "Quantity", status: "upcoming" },
  { name: "Validity", status: "upcoming" },
  { name: "Photos", status: "upcoming" },
  { name: "Expiration", status: "upcoming" },
];

export default function Stepper({ index }: { index: number }) {
  steps.forEach((step, i) => {
    if (i < index) {
      step.status = "complete";
    } else if (i === index) {
      step.status = "current";
    } else {
      step.status = "upcoming";
    }
  });
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-center" aria-label="Progress">
        <ol role="list" className="space-y-6">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === "complete" ? (
                <a href="#" className="group">
                  <span className="flex items-start">
                    <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                      <MdCheckCircle
                        className="h-full w-full text-brand group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-3 text-sm font-medium text-black underline group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === "current" ? (
                <a href="#" className="flex items-start" aria-current="step">
                  <span
                    className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute h-4 w-4 rounded-full bg-brand bg-opacity-50" />
                    <span className="relative block h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="ml-3 text-sm font-medium text-brand">
                    {step.name}
                  </span>
                </a>
              ) : (
                <a href="#" className="group">
                  <div className="flex items-start">
                    <div
                      className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                    </div>
                    <p className="ml-3 text-sm font-medium text-black underline group-hover:text-gray-900">
                      {step.name}
                    </p>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
