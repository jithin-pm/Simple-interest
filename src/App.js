import './App.css';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material/';
import { Button } from '@mui/material/';
import { useState } from 'react';




function App() {
  const [principle, setPrinciple] = useState(0);
  const [interst, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [result, setResult] = useState(0);
  const [isPrinciple,setIsPrinciple] = useState(true)
  const [isInterest,setIsInterest]= useState(true)
  const [isYear,setIsYear]= useState(true)

  const calculateInterest = (e) => {
    e.preventDefault();
    const result = (principle * interst * year) / 100;
    setResult(result)
  }

  const handleReset = () => {
    setPrinciple(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }
  const validate = (e) =>{
    const {name, value} =e.target;
   
    if (name==='principlevalue'){
      setPrinciple(value);
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true){
        setIsPrinciple(true);

      }
      else{
        setIsPrinciple(false);

      }
    
    }
    else if(name==='Interestfield'){
      setInterest(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true){
        setIsInterest(true);

      }
      else{
        setIsInterest(false);

      }

    }
    else if(name==='Yearfield'){
      setYear(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true){
        setIsYear(true);

      }
      else{
        setIsYear(false);

      }

    }
    



  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "90vh" }}>
        <div className='bg-light p-5 rounded' style={{ width: "500px" }}>
          <h1>Simple Interest</h1>
          <p>Calculate your simple interest easly</p>
          <div style={{ height: "150px" }} className=' flex-column bg-warning mt-3 rounded d-flex justify-content-center align-items-center w-100 '>
            <h2>&#8377;{result}</h2>
            <p>Total Simple Interest</p>

          </div>
          <form action="" className='mt-3' onSubmit={calculateInterest}>
            <TextField className='w-100' id="outlined-basic" label="&#8377; Principle Amount" variant="outlined"
              value={principle} onChange={(e)=>validate(e)} name='principlevalue'/>
              {
                !isPrinciple &&
                <div className='text-danger'>
                  <p>Invalid Input</p>
                </div>
              }

            <TextField className='w-100 mt-3' id="outlined-basic" label="Rate Of Interest (p.a)%" variant="outlined"
              value={interst}  onChange={(e)=>validate(e) } name='Interestfield'
              />
              {
                !isInterest &&
                <div className='text-danger'>
                  <p>Invalid Input</p>
                </div>
              }

            <TextField className='w-100 mt-3' id="outlined-basic" label="Year(Yr)" variant="outlined"
              value={year}  onChange={(e)=>validate(e)} name='Yearfield' />
              {
                !isYear &&
                <div className='text-danger'>
                  <p>Invalid Input</p>
                </div>
              }

            <Stack direction="row" spacing={2} className='mt-3'>
              <Button disabled={isPrinciple && isInterest && isYear?false:true} variant="contained" className='bg-success' style={{ height: '50px', width: '200px' }} type="submit">Calculate</Button>
              <Button variant="contained" className='bg-light' style={{ height: '50px', width: '200px', color: 'blue' }} onClick={handleReset} >Reset</Button>
            </Stack>

          </form>

        </div>
      </div>
    </>
  );
}

export default App;

