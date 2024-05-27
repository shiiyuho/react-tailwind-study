import React from "react";

const Button1 = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Button1;
