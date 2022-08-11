import { useRef, useState } from 'react';
import './App.css';

// this section is for suing callBack hooks in react.useCallback, useState, useEffect,

function App() {
  const [userInput, setUserInput ] = useState('');
  const [result, setResult ] = useState(0);

  const [num1] = useState(4);
  const [num2] = useState(5);

const sum = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
      console.log(`New array: ${buildArray()}`);
      setResult(buildArray());
  }, [buildArray]);
  return (
    <main className='App'>
      <input type='text' placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <h1>Output: {userInput || "--"}</h1>
      <p>Result: {JSON.stringify(result)}</p>
    </main>
  );
}

// Using the useMemo hooks. useCallback, useState, useEffect, useMemo

// const getArray = () => {
//   for (let i = 0; i < 1000000000; i++) {
//     //do something expensive
//   }
//   return ['Dave', 'Gray'];
// }


// function App() {
//   const [userNumber, setUserNumber] = useState('');
//   const [randomInput, setRandomInput] = useState('');

//   const fib = useCallback((n) => {
//     return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
//   }, [])

//   const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

//   const myArray = useMemo(() => getArray(), []);

//   useEffect(() => {
//     console.log('New array')
//   }, [myArray])

//   return (
//     <main className="App">
//       <label>Fibonacci Sequence:</label>
//       <input type="number" value={userNumber} placeholder="Position" onChange={(e) => setUserNumber(e.target.value)} />
//       <p>Number: {fibNumber || "--"}</p>
//       <br /><br />
//       <label>Random Input:</label>
//       <input type="text" value={randomInput} placeholder="Random Input" onChange={(e) => setRandomInput(e.target.value)} />
//       <p>{randomInput}</p>
//     </main>
//   );
// }

// function App() {
//   const [randomInput, setRandomInput] = useState('');
//   const [seconds, setSeconds ] = useState(0);
//   const renders = useRef(0);
//   // const inputRef = useRef();
//   const timerId = useRef();

//   const handleChange = (e) => {
//     setRandomInput(e.target.value)
//     renders.current++;
//   }

  // const focusInput = () => {
  //   inputRef.current.focus();
  // }

  // const startTimer = () => {
  //   timerId.current = setInterval(() => {
  //     setSeconds( prev => prev + 1)
  //     renders.current++;
  //   }, 1000)
  //   console.log()
  // }

  // const stopTimer = () => {
  //   clearInterval(timerId.current);
  //   timerId.current = 0;
  //   console.log('stop timer');
  // }

  // const resetTimer = () => {
  //   stopTimer();
  //   if(seconds) {
  //     renders.current++;
  //     setSeconds(0);

  //   }
  // }

//   return (
//     <main className='App'>
//       <input type='text' value={randomInput} placeholder='Random Input' onChange={handleChange} />
//       <br></br>
//       <p>Randers: {renders.current}</p>
//       <br></br>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//       <br></br>
//       <p>OutputRender:{randomInput}</p>
//       <p>Seconds:{seconds}</p>
//     </main>
//   )
// }

export default App;
