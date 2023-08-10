"use client"
import React from 'react'
import { AiOutlinePause } from 'react-icons/ai';
import { RiLoopLeftLine } from 'react-icons/ri';
import { BsPlay } from 'react-icons/bs';
import { RxTrackNext } from 'react-icons/rx';

type PropsActions = {
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setIsBreak: React.Dispatch<React.SetStateAction<boolean>>,
    isBreak: boolean,
}

const Actions: React.FC<PropsActions> = ({ setTime, setIsBreak, isBreak }) => {

    const timerRef = React.useRef<NodeJS.Timer | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
    }

    const handlePause = () => {
        setIsPlaying(false);
        if (!timerRef.current) return;
        clearInterval(timerRef.current);
    }

    const handleReset = () => {
        setIsPlaying(false);
        setIsBreak(false);
        setTime(25 * 60);
        if (!timerRef.current) return;
        clearInterval(timerRef.current);
    }

    const handleNext = () => {
        setIsPlaying(false);
        setIsBreak(prev => !prev);
        if(!isBreak){
            setTime(5 * 60);
            if (!timerRef.current) return;
            clearInterval(timerRef.current);
            return;
        }else{
            setTime(25 * 60);
            if (!timerRef.current) return;
            clearInterval(timerRef.current);
            return;
        }
    }

    return (
        <div className="actions flex items-center gap-4">
            <Button onClick={handleReset} type="secondary">
                <RiLoopLeftLine />
            </Button>
            {
                isPlaying ?
                    <Button onClick={handlePause} type="primary">
                        <AiOutlinePause />
                    </Button>
                    :
                    <Button onClick={handlePlay} type="primary">
                        <BsPlay />
                    </Button>
            }
            <Button onClick={handleNext} type="secondary">
                <RxTrackNext />
            </Button>
        </div>
    )
}

type PropsButton = {
    onClick?: () => void
    type: 'primary' | 'secondary',
    children: React.ReactNode,
}

const Button: React.FC<PropsButton> = ({ onClick, type, children }) => {

    const borderColor = type === 'primary' ? 'border-blue-500 text-blue-500' : 'border-[#00A97F] text-[#00A97F]';
    return (
        <button onClick={onClick} className={`button border rounded-full p-2 ${borderColor} ${type === 'primary' && 'text-3xl'} `}>
            {children}
        </button>
    )
}

export default Actions