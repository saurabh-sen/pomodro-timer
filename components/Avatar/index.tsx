import Image from 'next/image'
import React from 'react'

type PropsAvatar = {
    photoURL: string
}

const Avatar: React.FC<PropsAvatar> = ({photoURL}) => {
  return (
    <Image className='rounded-full border-2 border-[#00A97F] shadow-md shadow-[#00A97F]' src={photoURL} alt="user" width={200} height={200} />
  )
}

export default Avatar