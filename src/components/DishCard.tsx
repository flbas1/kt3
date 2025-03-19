import React from 'react';
import { IDish } from './types';
import '../App.css'

interface DishCardProps {
  dish: IDish;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onStart, onStop, onReset }) => {
  return (
    <div className={dish.isActive ? "dish-card counting" : "dish-card stopped"}>
      <h2>{dish.name}</h2>
      <p>Temperature: {dish.temperature}°C</p>
      <p>Duration: {dish.duration} minutes</p>
      <p>Time Left: {dish.secondsLeft} seconds</p>
      <button onClick={onStart}>Start Timer</button>
      <button onClick={onStop}>Stop Timer</button>
      <button onClick={onReset}>Reset Timer</button>
    </div>
  );
};

export default DishCard;