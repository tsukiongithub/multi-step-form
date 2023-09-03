import { useRef, useState } from "react";

import {
  Root as FormRoot,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "@radix-ui/react-form";

import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";

import iconArcade from "./assets/images/icon-arcade.svg";
import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconPro from "./assets/images/icon-pro.svg";
import iconCheck from "./assets/images/icon-checkmark.svg";
import iconThankYou from "./assets/images/icon-thank-you.svg";

const availableTiers = ["arcade", "advanced", "pro"] as const;

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const personalInfoFormRef = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedTier, setSelectedTier] =
    useState<(typeof availableTiers)[number]>("arcade");

  const [selectedBilling, setSelectedBilling] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const calculateTotal = () => {
    const basePrice =
      selectedTier === "arcade" ? 9 : selectedTier === "advanced" ? 12 : 15;
    let addOnsPrice = 0;

    if (onlineService) addOnsPrice = addOnsPrice + 1;
    if (largerStorage) addOnsPrice = addOnsPrice + 2;
    if (customizableProfile) addOnsPrice = addOnsPrice + 2;

    return selectedBilling === "yearly"
      ? (basePrice + addOnsPrice) * 10
      : basePrice + addOnsPrice;
  };

  return (
    <>
      <div className="flex min-h-screen flex-col bg-magnolia font-ubuntu text-marine-blue desktop:grid desktop:place-content-center">
        <div className="mb-4 flex flex-col px-4 desktop:mb-0 desktop:flex-row desktop:rounded-lg desktop:bg-white desktop:p-4">
          <div className="select-none desktop:relative">
            <img
              className="absolute inset-x-0 top-0 max-h-64 w-full object-cover desktop:hidden"
              src={bgSidebarMobile}
              alt="background graphic"
            />
            <img
              className="hidden desktop:block"
              src={bgSidebarDesktop}
              alt="background graphic"
            />
            <div className="relative z-10 flex justify-center gap-4 py-8 desktop:absolute desktop:left-0 desktop:top-0 desktop:flex-col desktop:gap-8 desktop:px-8">
              <div className="flex items-center gap-4">
                <button
                  className={`grid h-10 w-10 place-content-center rounded-full font-bold ${
                    currentStep === 1
                      ? "bg-light-blue"
                      : "border border-white text-white"
                  }`}
                  onClick={() => {
                    if (currentStep !== 5) setCurrentStep(1);
                  }}
                >
                  1
                </button>
                <div className="hidden desktop:block">
                  <div className="text-sm text-pastel-blue">STEP 1</div>
                  <div className="font-bold text-white">YOUR INFO</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`grid h-10 w-10 place-content-center rounded-full font-bold ${
                    currentStep === 2
                      ? "bg-light-blue"
                      : "border border-white text-white"
                  }`}
                  onClick={() => {
                    if (currentStep !== 5) setCurrentStep(2);
                  }}
                >
                  2
                </button>
                <div className="hidden desktop:block">
                  <div className="text-sm text-pastel-blue">STEP 2</div>
                  <div className="font-bold text-white">SELECT PLAN</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`grid h-10 w-10 place-content-center rounded-full font-bold ${
                    currentStep === 3
                      ? "bg-light-blue"
                      : "border border-white text-white"
                  }`}
                  onClick={() => {
                    if (currentStep !== 5) setCurrentStep(3);
                  }}
                >
                  3
                </button>
                <div className="hidden desktop:block">
                  <div className="text-sm text-pastel-blue">STEP 3</div>
                  <div className="font-bold text-white">ADD-ONS</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`grid h-10 w-10 place-content-center rounded-full font-bold ${
                    currentStep >= 4
                      ? "bg-light-blue"
                      : "border border-white text-white"
                  }`}
                  onClick={() => {
                    if (currentStep !== 5) setCurrentStep(4);
                  }}
                >
                  4
                </button>
                <div className="hidden desktop:block">
                  <div className="text-sm text-pastel-blue">STEP 4</div>
                  <div className="font-bold text-white">SUMMARY</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`z-10 rounded-lg bg-white px-6 py-8 shadow-lg desktop:flex desktop:w-[42rem] desktop:flex-col desktop:px-20 desktop:shadow-none ${
              currentStep === 5 ? "desktop:justify-center" : ""
            }`}
          >
            {currentStep === 5 ? (
              <div className="mx-auto my-8 w-16 select-none desktop:w-auto">
                <img
                  src={iconThankYou}
                  alt="thank you icon"
                />
              </div>
            ) : null}
            <div
              className={`mb-2 text-2xl font-bold ${
                currentStep === 5 ? "text-center" : ""
              }`}
            >
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
            <div className="mb-6 text-cool-gray text-balance">
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
                  <div>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com
                  </div>
                </div>
              )}
            </div>
            {currentStep === 1 ? (
              <FormRoot
                className="grid gap-4"
                onSubmit={(ev) => {
                  ev.preventDefault();
                  console.log("here");
                  setCurrentStep(currentStep + 1);
                }}
                ref={personalInfoFormRef}
              >
                <FormField name="name">
                  <div className="mb-1 flex select-none justify-between text-sm tracking-tight">
                    <FormLabel>Name</FormLabel>
                    <FormMessage
                      className="font-bold text-strawberry-red"
                      match={"valueMissing"}
                    >
                      This field is required
                    </FormMessage>
                  </div>
                  <FormControl
                    className="w-full rounded border border-light-gray px-4 py-2 font-medium focus:outline-none focus-visible:border-purplish-blue data-[invalid]:border-strawberry-red"
                    value={name}
                    onChange={(ev) => {
                      setName(ev.target.value);
                    }}
                    placeholder="e.g. Stephen King"
                    required
                    asChild
                  >
                    <input type="text" />
                  </FormControl>
                </FormField>
                <FormField name="email">
                  <div className="mb-1 flex select-none justify-between text-sm tracking-tight">
                    <FormLabel>Email Address</FormLabel>
                    <FormMessage
                      className="font-bold text-strawberry-red"
                      match={"valueMissing"}
                    >
                      This field is required
                    </FormMessage>
                    <FormMessage
                      className="font-bold text-strawberry-red"
                      match={"typeMismatch"}
                    >
                      Invalid email
                    </FormMessage>
                  </div>
                  <FormControl
                    className="w-full rounded border border-light-gray px-4 py-2 font-medium focus:outline-none focus-visible:border-purplish-blue data-[invalid]:border-strawberry-red"
                    value={email}
                    onChange={(ev) => {
                      setEmail(ev.target.value);
                    }}
                    placeholder="e.g. stephenking@lorem.com"
                    required
                    asChild
                  >
                    <input type="email" />
                  </FormControl>
                </FormField>
                <FormField name="phone">
                  <div className="mb-1 flex select-none justify-between whitespace-nowrap text-sm tracking-tight">
                    <FormLabel>Phone Number</FormLabel>
                    <FormMessage
                      className="font-bold text-strawberry-red"
                      match={"valueMissing"}
                    >
                      This field is required
                    </FormMessage>
                  </div>
                  <FormControl
                    className="w-full rounded border border-light-gray px-4 py-2 font-medium focus:outline-none focus-visible:border-purplish-blue data-[invalid]:border-strawberry-red"
                    value={phone}
                    onChange={(ev) => {
                      const value = ev.target.value.replace(/\D/gm, "");

                      setPhone(value);
                    }}
                    placeholder="e.g. +1 234 567 890"
                    required
                    asChild
                  >
                    <input type="tel" />
                  </FormControl>
                </FormField>
              </FormRoot>
            ) : currentStep === 2 ? (
              <div className="grid gap-4 desktop:grid-cols-3">
                {availableTiers.map((tier, key) => {
                  return (
                    <button
                      className={`flex select-none items-center gap-4 rounded-lg border p-4 transition duration-75 desktop:flex-col desktop:items-start desktop:gap-8 ${
                        selectedTier === tier
                          ? "border-purplish-blue bg-alabaster"
                          : "border-light-gray hover:border-purplish-blue"
                      }`}
                      onClick={() => {
                        setSelectedTier(tier);
                      }}
                      key={key}
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
                        <div className="font-bold text-marine-blue">
                          {tier.replace(tier[0], tier[0].toUpperCase())}
                        </div>
                        <div className="tracking-tight text-cool-gray">
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
                            <>
                              <span className="text-sm desktop:hidden">
                                {" "}
                                + 2 months free
                              </span>
                              <div className="text-sm text-marine-blue">
                                2 months free
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
                <div className="mt-2 flex items-center justify-evenly rounded-lg bg-alabaster py-3 desktop:col-span-3">
                  <div>Monthly</div>
                  <div>
                    <button
                      className={`relative h-6 w-12 rounded-full bg-marine-blue after:absolute after:inset-y-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-[left] after:content-[''] ${
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
            ) : currentStep === 3 ? (
              <div className="grid gap-4">
                <button
                  className={`flex w-full select-none items-center rounded-lg border px-4 py-3 text-start tracking-tight transition duration-75 ${
                    onlineService
                      ? "border-purplish-blue bg-magnolia"
                      : "border-light-gray hover:border-purplish-blue"
                  }`}
                  onClick={() => {
                    setOnlineService(!onlineService);
                  }}
                >
                  <div
                    className={`mr-4 grid h-5 w-5 place-content-center rounded border transition ${
                      onlineService
                        ? "border-purplish-blue bg-purplish-blue"
                        : "border-light-gray"
                    }`}
                  >
                    <img
                      src={iconCheck}
                      alt="checkmark icon"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Online service</div>
                    <div className="text-sm tracking-tighter text-cool-gray">
                      Access to multiplayer games
                    </div>
                  </div>
                  <div className="ml-auto text-sm text-purplish-blue">
                    {selectedBilling === "monthly" ? "+$1/mo" : "+$10/yr"}
                  </div>
                </button>
                <button
                  className={`flex w-full select-none items-center rounded-lg border px-4 py-3 text-start tracking-tight transition duration-75 ${
                    largerStorage
                      ? "border-purplish-blue bg-magnolia"
                      : "border-light-gray hover:border-purplish-blue"
                  }`}
                  onClick={() => {
                    setLargerStorage(!largerStorage);
                  }}
                >
                  <div
                    className={`mr-4 grid h-5 w-5 place-content-center rounded border transition ${
                      largerStorage
                        ? "border-purplish-blue bg-purplish-blue"
                        : "border-light-gray"
                    }`}
                  >
                    <img
                      src={iconCheck}
                      alt="checkmark icon"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Larger storage</div>
                    <div className="text-sm tracking-tighter text-cool-gray">
                      Extra 1TB of cloud save
                    </div>
                  </div>
                  <div className="ml-auto text-sm text-purplish-blue">
                    {selectedBilling === "monthly" ? "+$2/mo" : "+$20/yr"}
                  </div>
                </button>
                <button
                  className={`flex w-full select-none items-center rounded-lg border px-4 py-3 text-start tracking-tight transition duration-75 ${
                    customizableProfile
                      ? "border-purplish-blue bg-magnolia"
                      : "border-light-gray hover:border-purplish-blue"
                  }`}
                  onClick={() => {
                    setCustomizableProfile(!customizableProfile);
                  }}
                >
                  <div
                    className={`mr-4 grid h-5 w-5 place-content-center rounded border transition ${
                      customizableProfile
                        ? "border-purplish-blue bg-purplish-blue"
                        : "border-light-gray"
                    }`}
                  >
                    <img
                      src={iconCheck}
                      alt="checkmark icon"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Customizable profile</div>
                    <div className="text-sm tracking-tighter text-cool-gray">
                      Custom theme on your profile
                    </div>
                  </div>
                  <div className="ml-auto text-sm text-purplish-blue">
                    {selectedBilling === "monthly" ? "+$2/mo" : "+$20/yr"}
                  </div>
                </button>
              </div>
            ) : currentStep === 4 ? (
              <div className="grid gap-4">
                <div className="grid gap-4 rounded-lg bg-alabaster p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">
                        {selectedTier.replace(
                          selectedTier[0],
                          selectedTier[0].toUpperCase(),
                        )}{" "}
                        (
                        {selectedBilling.replace(
                          selectedBilling[0],
                          selectedBilling[0].toUpperCase(),
                        )}
                        )
                      </div>
                      <button
                        className="select-none text-cool-gray underline decoration-2 transition duration-75 hover:text-purplish-blue"
                        onClick={() => {
                          setCurrentStep(2);
                        }}
                      >
                        Change
                      </button>
                    </div>
                    <div className="font-bold">
                      {selectedBilling === "monthly" ? (
                        <>
                          {selectedTier === "arcade"
                            ? "$9/mo"
                            : selectedTier === "advanced"
                            ? "$12/mo"
                            : selectedTier === "pro"
                            ? "$15/mo"
                            : ""}
                        </>
                      ) : (
                        <>
                          {selectedTier === "arcade"
                            ? "$90/yr"
                            : selectedTier === "advanced"
                            ? "$120/yr"
                            : selectedTier === "pro"
                            ? "$150/yr"
                            : ""}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-light-gray" />
                  {onlineService ? (
                    <div className="flex items-center justify-between">
                      <div className="text-cool-gray">Online storage</div>
                      <div className="font-medium">
                        {selectedBilling === "monthly" ? "+$1/mo" : "+$10/yr"}
                      </div>
                    </div>
                  ) : null}
                  {largerStorage ? (
                    <div className="flex items-center justify-between">
                      <div className="text-cool-gray">Larger storage</div>
                      <div className="font-medium">
                        {selectedBilling === "monthly" ? "+$2/mo" : "+$20/yr"}
                      </div>
                    </div>
                  ) : null}
                  {customizableProfile ? (
                    <div className="flex items-center justify-between">
                      <div className="text-cool-gray">Customizable profile</div>
                      <div className="font-medium">
                        {selectedBilling === "monthly" ? "+$2/mo" : "+$20/yr"}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center justify-between px-4">
                  <div className="text-cool-gray">
                    Total{" "}
                    {selectedBilling === "monthly"
                      ? "(per month)"
                      : "(per year)"}
                  </div>
                  <div className="font-bold text-purplish-blue desktop:text-xl">
                    +${calculateTotal()}/
                    {selectedBilling === "monthly" ? "mo" : "yr"}
                  </div>
                </div>
              </div>
            ) : null}
            {currentStep < 5 ? (
              <div className="mt-auto hidden select-none items-center desktop:flex">
                {currentStep > 1 ? (
                  <button
                    className="h-fit px-2 py-1 text-cool-gray transition duration-75 hover:text-purplish-blue"
                    onClick={() => {
                      setCurrentStep(currentStep - 1);
                    }}
                  >
                    Go Back
                  </button>
                ) : null}
                <button
                  className={`ml-auto rounded-lg ${
                    currentStep === 4 ? "bg-purplish-blue" : "bg-marine-blue"
                  } px-6 py-3 text-white transition duration-75 hover:bg-opacity-90`}
                  onClick={() => {
                    if (currentStep === 1) {
                      if (personalInfoFormRef.current)
                        personalInfoFormRef.current.requestSubmit();
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                >
                  {currentStep < 4 ? "Next Step" : "Confirm"}
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {currentStep < 5 ? (
          <div className="mt-auto flex select-none bg-white p-4 shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] desktop:hidden">
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
              className="ml-auto rounded bg-marine-blue px-5 py-3 text-white"
              onClick={() => {
                if (currentStep === 1) {
                  if (personalInfoFormRef.current)
                    personalInfoFormRef.current.requestSubmit();
                } else {
                  setCurrentStep(currentStep + 1);
                }
              }}
            >
              {currentStep < 4 ? "Next Step" : "Confirm"}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
