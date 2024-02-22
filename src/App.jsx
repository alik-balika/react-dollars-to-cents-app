import React from "react";

const App = () => {
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
          className="w-full py-2 px-3 my-2 inline-block border border-gray-300 rounded-sm max-w-30"
        />
        <div>
          <p className="">Total Cents: 469</p>
          <p className="">Quarters: 18</p>
          <p className="">Dimes: 1</p>
          <p className="">Nickels: 1</p>
          <p className="">Pennies: 4</p>
        </div>
      </div>
    </div>
  );
};

export default App;
