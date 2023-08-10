"use client"
import Login from '@/components/Login';
import TimerContainer from '@/components/TimerContainer';
import React from 'react';

export default function Home() {

  const [uid, setUid] = React.useState<string>("");

  React.useEffect(() => {
    function getCookie(cname: string): string {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document?.cookie);
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
    setUid(getCookie("uid"));
  }, []);

  if (!uid) {
    return <Login setUid={setUid} />;
  }

  return <TimerContainer />
}
