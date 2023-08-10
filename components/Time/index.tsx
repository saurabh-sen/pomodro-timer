import React from 'react'

type PropsTimer = {
    minutes: string,
    seconds: string
}

const Time: React.FC<PropsTimer> = ({ minutes, seconds }) => {

    return (
        <div className="time flex gap-1 items-center text-7xl font-bold">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    )
}

export default Time