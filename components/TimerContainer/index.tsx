"use client"
import React from 'react'
import Avatar from '../Avatar';
import Timer from '../Timer';

const TimerContainer = () => {

    function getCookie(cname: string): string {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length).replace(/\"/g, "");
          }
        }
        return "";
    }

    const photoURL = getCookie('photoURL');

    return (
        <div className="timercontainer flex justify-center items-center min-h-screen gap-16">
            <Avatar photoURL={photoURL} />
            <Timer />
        </div>
    )
}

export default TimerContainer