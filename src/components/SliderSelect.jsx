import React from "react";
import MySliderComponent from "./MySliderComponent";

const SliderSelect = ({ data, setData }) => {
    const bank_limit = 10000;
  
    const handleHomeValueChange = (e) => {
      const newHomeValue = parseFloat(e.target.value);
      const newDownPayment = 0.2 * newHomeValue;
      const newLoanAmount = newHomeValue - newDownPayment;
      setData({
        ...data,
        homeValue: newHomeValue,
        downPayment: newDownPayment,
        loanAmount: newLoanAmount,
      });
    };
  
    const handleDownPaymentChange = (e) => {
      const newDownPayment = parseFloat(e.target.value);
      const newLoanAmount = data.homeValue - newDownPayment;
      setData({
        ...data,
        downPayment: newDownPayment,
        loanAmount: newLoanAmount,
      });
    };
  
    return (
      <div>
        <MySliderComponent
          onChange={handleHomeValueChange}
          defaultValue={data.homeValue}
          min={1000}
          max={bank_limit}
          steps={100}
          unit="$"
          amount={data.homeValue}
          label="Home Value"
          value={data.homeValue}
        />
  
        <MySliderComponent
          onChange={handleDownPaymentChange}
          defaultValue={data.downPayment}
          min={0}
          max={data.homeValue}
          steps={100}
          unit="$"
          amount={data.downPayment}
          label="Down Payment"
          value={data.downPayment}
        />
  
        <MySliderComponent
          onChange={(e, value) =>
            setData({
              ...data,
              loanAmount: value.toFixed(0),
              downPayment: (data.homeValue - value).toFixed(0),
            })
          }
          defaultValue={data.loanAmount}
          min={0}
          max={data.homeValue}
          steps={100}
          unit="$"
          amount={data.loanAmount}
          label="Loan Amount"
          value={data.loanAmount}
        />
  
        <MySliderComponent
         onChange={(e) => setData({ ...data, interestRate: parseFloat(e.target.value) })}
          defaultValue={data.interestRate}
          min={2}
          max={18}
          steps={0.5}
          unit="%"
          amount={data.interestRate}
          label="Interest Rate"
          value={data.interestRate}
        />
      </div>
    );
  };
  
  
  export default SliderSelect;