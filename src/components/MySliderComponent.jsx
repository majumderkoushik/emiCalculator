import React from "react"
const MySliderComponent = ({
    label,
    unit,
    amount,
    min,
    max,
    defaultValue,
    onChange,
    value,
    steps,
  }) => {
    return (
      <div className="my-6"> 
        <div className="space-y-4"> 
          <p className="text-sm">{label}</p> 
          <p className="text-xl">
            {unit} {amount}
          </p>
        </div>
        <input
          type="range"
          className="w-full"
          min={min}
          max={max}
          defaultValue={defaultValue}
          aria-label="Default"
          value={value}
          step={steps}
          onChange={onChange}
        />
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">
            {unit} {min}
          </p>
          <p className="text-xs text-gray-500">
            {unit} {max}
          </p>
        </div>
      </div>
    );
  };

export default MySliderComponent;