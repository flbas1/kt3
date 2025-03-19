import React, { useState, useEffect, useCallback } from 'react';
import DishCard from './components/DishCard';
import { IDish } from './components/types';

const initialDishes: IDish[] = [
  { id: 1, name: 'Spaghetti', temperature: '100', duration: 10 },
  { id: 2, name: 'Chicken', temperature: '180', duration: 30 },
  { id: 3, name: 'Vegetable Stir Fry', temperature: '200', duration: 15 }
];

const App: React.FC = () => {
  const [dishes, setDishes] = useState<IDish[]>(
    initialDishes.map(dish => ({
      ...dish,
      secondsLeft: dish.duration * 60,
      isActive: false,
    }))
  );
  const [sortTempDirection, setSortTempDirection] = useState<boolean>(true);
  const [sortTimeDirection, setSortTimeDirection] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDishes(prevDishes =>
        prevDishes.map(dish =>
          dish.isActive && dish.secondsLeft && dish.secondsLeft > 0
            ? { ...dish, secondsLeft: dish.secondsLeft - 1 }
            : dish
        )
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleStart = useCallback((id: number) => {
    setDishes(prevDishes =>
      prevDishes.map(dish =>
        dish.id === id ? { ...dish, isActive: true } : dish
      )
    );
  }, []);

  const handleStop = useCallback((id: number) => {
    setDishes(prevDishes =>
      prevDishes.map(dish =>
        dish.id === id ? { ...dish, isActive: false } : dish
      )
    );
  }, []);

  const handleReset = useCallback((id: number) => {
    setDishes(prevDishes =>
      prevDishes.map(dish =>
        dish.id === id ? { ...dish, isActive: false, secondsLeft: dish.duration * 60 } : dish
      )
    );
  }, []);

  const sortTemp = useCallback(() => {
    setDishes(prevDishes =>
      [...prevDishes].sort((a, b) =>
        sortTempDirection
          ? a.temperature.localeCompare(b.temperature)
          : b.temperature.localeCompare(a.temperature)
      )
    );
    setSortTempDirection(!sortTempDirection);
  }, [sortTempDirection]);

  const sortTime = useCallback(() => {
    setDishes(prevDishes =>
      [...prevDishes].sort((a, b) =>
        sortTimeDirection ? a.duration - b.duration : b.duration - a.duration
      )
    );
    setSortTimeDirection(!sortTimeDirection);
  }, [sortTimeDirection]);

  return (
    <div className="App">
      <h1>Cooking Timer App</h1>
      <button onClick={sortTemp}>Sort by Temp</button>
      <button onClick={sortTime}>Sort by Time</button>
      <div className="dish-list">
        {dishes.map(dish => (
          <DishCard
            key={dish.id}
            dish={dish}
            onStart={() => handleStart(dish.id)}
            onStop={() => handleStop(dish.id)}
            onReset={() => handleReset(dish.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;