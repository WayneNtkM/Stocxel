import React from 'react'
import Image from 'next/image'
import rolling from '../images/Rolling-2s-200px (1).svg'

export default function Loading() {
  return (
    <div className="h-[100vh] flex justify-center relative">
      <Image
        src={rolling}
        alt="Loading animation"
        width={130}
        className="absolute top-[170px]"
      />
    </div>
  )
}
