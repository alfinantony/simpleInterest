import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

//state creation 
  const [principal,setPrinciple]=useState('')
  const [year,setyear]=useState('')
  const [rate,setRate]=useState('')
  const [interest,setInterest]=useState('')
  // console.log(principal);
  // console.log(rate);
  // console.log(year);


  // function call for button
   const handleCalculate=(e)=>{
      let output = principal*year*rate/100
      console.log(output);
      setInterest(output)
   }

   const handleReset=(e)=>{
    setPrinciple('')
    setyear('')
    setRate('')
    setInterest('')
   }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="head">
            <h1>Simple Interest Calculator</h1>
            <p>Simple interest is a method to calculate the amount of interest charged on a sum at a given rate and for a given period of time. In simple interest, the principal amount is always the same, unlike compound interest where we add the interest to the principal to find the principal for the new principal for the next year.

              In this lesson, you will be introduced to the concept of borrowing money and the simple interest that is derived from borrowing. You will also be introduced to terms such as principal, amount, rate of interest, and time period. Through these terms, you can calculate simple interest using the simple interest formula.</p>
          </div>

          <div className="card">
            <h3 className='symbol'>&#8377; {interest}</h3>
            <p id='para'>Your Total Simple Interest</p>
          </div>

          <div className='Input'>
            <TextField id="outlined-basic" label="Principle Amount" variant="outlined" onChange={e=>setPrinciple(e.target.value)} value={principal} />
            <br />
            <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" onChange={e=>setRate(e.target.value)} value={rate} /> <br />
            <TextField id="outlined-basic" label="Year" variant="outlined" onChange={e=>setyear(e.target.value)} value={year}/>
            
            <br />

            <Button
              onClick={handleCalculate}  variant="contained"> 
        Calculate
      </Button> <br />
      <Button 
                onClick={handleReset} variant="outlined">
        Reset
      </Button>
          </div>
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
