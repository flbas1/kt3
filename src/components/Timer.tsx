// import React from 'react';
// // import {TimerProps}  from './types';

// function Timer({ duration, onTimerEnd }:TimerProps) {
//     const [timeLeft, setTimeLeft] = React.useState(duration);
//     const [isActive, setIsActive] = React.useState(false);
//     let timerId:number =0;

//     React.useEffect(() => {
//         if (isActive && timeLeft > 0) {
//             timerId = setInterval(() => {
//                 setTimeLeft((prevTime) => prevTime - 1);
//             }, 1000);
//         } else if (timeLeft === 0) {
//             onTimerEnd();
//         }

//         return () => clearInterval(timerId);
//     }, [isActive, timeLeft, onTimerEnd]);

//     const startTimer = () => {
//         setIsActive(true);
//         console.log("startTimer");
//     };

//     const stopTimer = () => {
//         setIsActive(false);
//         console.log("stopTimer");
//     };

//     const resetTimer = () => {
//         setIsActive(false);
//         setTimeLeft(duration);
//     };

//     return (
//         <div>
//             <p>Time Left: {timeLeft}s</p>
//             <button onClick={startTimer}>Start</button>
//             <button onClick={stopTimer}>Stop</button>
//             <button onClick={resetTimer}>Reset</button>
//         </div>
//     );
// }

// export default Timer;