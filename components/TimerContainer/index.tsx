"use client"
import { getCookie } from '@/actions'
import React from 'react'
import Avatar from '../Avatar';
import Timer from '../Timer';

const TimerContainer = () => {

    const photoURL = getCookie('photoURL');    

    return (
        <div className="timercontainer flex justify-center items-center min-h-screen gap-16">
            <Avatar photoURL={photoURL} />
            <Timer />
        </div>
    )
}

export default TimerContainer