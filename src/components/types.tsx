export interface IDish {
    id: number;
    name: string;
    temperature: string;
    duration: number;
    secondsLeft?: number;  //this gets computed at creation.  every second the timer is active, this value is decremented by 1
    isActive?: boolean;  //this gets toggled when the user clicks the start/stop button
}

// export interface DishCardProps {
//     dish: IDish;
//     onStart?: () => void;
//     onStop?: () => void;
// }

// export interface TimerProps {
//     duration: number;
//     onTimerEnd: () => void;
// }