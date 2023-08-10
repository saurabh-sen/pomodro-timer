import React, { useEffect } from 'react'
import Time from '../Time';
import Actions from '../Actions';

const Timer: React.FC = () => {

    const [time, setTime] = React.useState(25 * 60);
    const [isBreak, setIsBreak] = React.useState(false);    

    useEffect(() => {
        if (time <= 0 && !isBreak) {
            setIsBreak(true);
            setTime(5 * 60);
        }else{
            if(time <= 0 && isBreak){
                setIsBreak(false);
                setTime(25 * 60);
            }
        }
    }, [time, isBreak]);

    const minutes = Math.floor((time / 60) % 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');

    return (
        <div className="timer flex flex-col items-center gap-4">
            <Time minutes={minutes} seconds={seconds} />
            {
                isBreak ?
                    <p className="text-2xl text-white font-semibold">Break</p>
                    :
                    <p className="text-2xl text-white font-semibold">Focus</p>
            }
            <Actions setTime={setTime} setIsBreak={setIsBreak} isBreak={isBreak} />
        </div>
    )
}

export default Timer