import { FormEvent, useState } from "react";

import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";

import iconArcade from "./assets/images/icon-arcade.svg";
import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconPro from "./assets/images/icon-pro.svg";

const availableTiers = ["arcade", "advanced", "pro"] as const;

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedTier, setSelectedTier] =
    useState<(typeof availableTiers)[number]>("arcade");

  const [selectedBilling, setSelectedBilling] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(name, email, phone);
  };

  const validateForm = () => {
    return true;
  };

  const handleFinish = () => {};

  return (
    <>
      <div className="font-ubuntu min-h-screen flex flex-col bg-magnolia text-marine-blue">
        <div className="flex flex-col px-4 mb-4">
          <div>
            <img
              className="absolute top-0 inset-x-0"
              src={bgSidebarMobile}
              alt="background graphic"
            />
            <div className="z-10 relative flex justify-center gap-4 py-8">
              {[1, 2, 3, 4].map((step) => {
                return (
                  <div
                    className={`rounded-full grid place-content-center font-bold w-10 h-10 ${
                      currentStep === step
                        ? "bg-light-blue"
                        : "border border-white text-white"
                    }`}
                  >
                    {step}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="px-6 py-8 z-10 rounded-lg shadow-lg bg-white">
            <div className="text-2xl font-bold mb-2">
              {currentStep === 1
                ? "Personal Info"
                : currentStep === 2
                ? "Select your plan"
                : currentStep === 3
                ? "Pick add-ons"
                : currentStep === 4
                ? "Finishing up"
                : "Thank you!"}
            </div>
            <div className="text-balance text-cool-gray mb-6">
              {currentStep === 1 ? (
                "Please provide your name, email address and phone number."
              ) : currentStep === 2 ? (
                "You have the option of monthly or yearly billing."
              ) : currentStep === 3 ? (
                "Add-ons help enhance your gaming experience."
              ) : currentStep === 4 ? (
                "Double-check everything looks OK before confirming."
              ) : (
                <div className="text-center">
                  <div>Thanks for confirming your subscription!</div>
                  <div>
                    We hope you have fun using our platform. If you ever need
                    support, please feel free to email us at
                    support@loremgaming.com
                  </div>
                </div>
              )}
            </div>
            {currentStep === 1 ? (
              <form
                className="flex flex-col gap-4"
                onSubmit={(ev) => {
                  if (validateForm()) handleSubmit(ev);
                }}
              >
                <div>
                  <label
                    className="flex flex-col"
                    htmlFor="name"
                  >
                    <span className="text-sm tracking-tight mb-1">Name</span>
                    <input
                      className="border border-light-gray font-medium rounded px-4 py-2"
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(ev) => {
                        setName(ev.target.value);
                      }}
                      placeholder="e.g. Stephen King"
                    />
                  </label>
                </div>
                <div>
                  <label
                    className="flex flex-col"
                    htmlFor="email"
                  >
                    <span className="text-sm tracking-tight mb-1">
                      Email Address
                    </span>
                    <input
                      className="border border-light-gray font-medium rounded px-4 py-2"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(ev) => {
                        setEmail(ev.target.value);
                      }}
                      placeholder="e.g. stephenking@lorem.com"
                    />
                  </label>
                </div>
                <div>
                  <label
                    className="flex flex-col"
                    htmlFor="phone"
                  >
                    <span className="text-sm tracking-tight mb-1">
                      Phone Number
                    </span>
                    <input
                      className="border border-light-gray font-medium rounded px-4 py-2"
                      type="tel"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(ev) => {
                        setPhone(ev.target.value);
                      }}
                      placeholder="e.g. +1 234 567 890"
                    />
                  </label>
                </div>
              </form>
            ) : currentStep === 2 ? (
              <div className="grid gap-4">
                {availableTiers.map((tier) => {
                  return (
                    <button
                      className={`flex items-center gap-4 p-4 border rounded-lg ${
                        selectedTier === tier
                          ? "border-purplish-blue bg-alabaster"
                          : "border-light-gray"
                      }`}
                      onClick={() => {
                        setSelectedTier(tier);
                      }}
                    >
                      <img
                        src={
                          tier === "arcade"
                            ? iconArcade
                            : tier === "advanced"
                            ? iconAdvanced
                            : tier === "pro"
                            ? iconPro
                            : ""
                        }
                        alt={`icon for the ${tier} tier`}
                      />
                      <div className="text-start">
                        <div className="text-marine-blue font-bold">
                          {tier.replace(tier[0], tier[0].toUpperCase())}
                        </div>
                        <div className="text-cool-gray tracking-tight">
                          {selectedBilling === "monthly" ? (
                            <>
                              {tier === "arcade"
                                ? "$9/mo"
                                : tier === "advanced"
                                ? "$12/mo"
                                : tier === "pro"
                                ? "$15/mo"
                                : ""}
                            </>
                          ) : (
                            <>
                              {tier === "arcade"
                                ? "$90/yr"
                                : tier === "advanced"
                                ? "$120/yr"
                                : tier === "pro"
                                ? "$150/yr"
                                : ""}
                            </>
                          )}
                          {selectedBilling === "yearly" ? (
                            <span className="text-sm"> + 2 months free</span>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
                <div className="flex justify-evenly items-center bg-magnolia py-3 mt-2 rounded-lg">
                  <div>Monthly</div>
                  <div>
                    <button
                      className={`after:content-[''] relative after:bg-white w-12 h-6 rounded-full after:absolute after:h-4 after:w-4 after:transition-[left] after:rounded-full after:inset-y-1 bg-marine-blue ${
                        selectedBilling === "monthly"
                          ? "after:left-1"
                          : "after:left-7"
                      }`}
                      onClick={() => {
                        selectedBilling === "monthly"
                          ? setSelectedBilling("yearly")
                          : setSelectedBilling("monthly");
                      }}
                    />
                  </div>
                  <div>Yearly</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="bg-white shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] mt-auto flex p-4">
          {currentStep > 1 ? (
            <button
              className="text-cool-gray"
              onClick={() => {
                setCurrentStep(currentStep - 1);
              }}
            >
              Go Back
            </button>
          ) : null}
          <button
            className="px-5 py-3 ml-auto bg-marine-blue text-white rounded"
            onClick={() => {
              currentStep < 4
                ? setCurrentStep(currentStep + 1)
                : handleFinish();
            }}
          >
            {currentStep < 4 ? "Next Step" : "Confirm"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
