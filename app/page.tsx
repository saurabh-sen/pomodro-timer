"use client"
import { getCookie } from '@/actions'
import Login from '@/components/Login';
import TimerContainer from '@/components/TimerContainer';

export default function Home() {

  const uid = getCookie('uid')

  if(!uid){
    return <Login />;
  }

  return <TimerContainer />
}
