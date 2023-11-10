import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import Tenure from './components/Tenure';
import Result from './components/result';

function App() {
  const [data, setData] = useState({
    homeValue: 4000, 
    downPayment: 4000 * 0.2, 
    loanAmount: 4000 * 0.8, 
    loanTerm: 10, 
    interestRate: 4.5, 
  });
  console.log(data);
  return (
  <>
  <div className="App">
    <Navbar />
    <div className="container mx-auto mt-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center"> 
        <div className="md:col-span-1">
          <SliderSelect data={data} setData={setData}
            />
          <Tenure data={data} setData={setData}
           />
        </div>
        <div className="md:col-span-1">
          <Result data={data} />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
