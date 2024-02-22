import React, { useState } from "react";

const validInput = "1234567890.";

const App = () => {
  const [dollars, setDollars] = useState("");
  const [error, setError] = useState("");
  const [totalCents, setTotalCents] = useState("");

  const handleDollarChange = (e) => {
    const userInput = e.target.value;

    if (moreThanOnePeriod(userInput)) return;

    for (const c of userInput) {
      if (!validInput.includes(c)) {
        return;
      }
    }

    if (userInput.includes(".")) {
      const split = userInput.split(".");

      if (split[1].length > 2) return;
    }

    setDollars(userInput);
  };

  const moreThanOnePeriod = (string) => {
    let count = 0;
    for (const c of string) {
      if (c === ".") {
        count++;
        if (count > 1) return true;
      }
    }
    return false;
  };

  const convertDollarsToCents = () => {
    if (dollars === "") {
      setError("Please enter a dollar amount.");
      return;
    }

    let [dollarsAmount, centsAmount = "00"] = dollars.split(".");
    dollarsAmount = dollarsAmount === "" ? 0 : parseInt(dollars);
    centsAmount = parseInt(centsAmount.padEnd(2, "0").slice(0, 2));

    setTotalCents(dollarsAmount * 100 + centsAmount);
    setError("");
  };

  return (
    <div>
      <header className="bg-green-800 text-white p-5 text-3xl">
        Dollars to Cents
      </header>
      <div className="bg-gray-200 p-10 m-10 text-lg rounded-md">
        <label htmlFor="dollars" className="text-xl">
          Dollar Amount:{" "}
        </label>
        <input
          type="text"
          id="dollars"
          className="w-full py-2 px-3 mt-1 inline-block border border-gray-300 rounded-sm max-w-30"
          value={dollars}
          onChange={(e) => handleDollarChange(e)}
        />
        <button
          className="bg-green-600 text-white mt-2 w-full py-2 rounded-sm hover:bg-green-800"
          onClick={convertDollarsToCents}
        >
          CONVERT
        </button>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-3 rounded relative">
            <p className="block sm:inline">{error}</p>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setError("")}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
        <div className="mt-2">
          {totalCents && <p className="">Total Cents: {totalCents}</p>}
          {/* <p className="">Quarters: 18</p>
          <p className="">Dimes: 1</p>
          <p className="">Nickels: 1</p>
          <p className="">Pennies: 4</p> */}
        </div>
      </div>
    </div>
  );
};

export default App;
