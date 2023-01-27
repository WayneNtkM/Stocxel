import Link from 'next/link'
import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className={`flex flex-col gap-4 bg-black/[0.8] w-[100vw] h-[auto] p-[1em]`}>
      <div>
        <h1
          className="text-2xl w-40 text-white font-[Helvetica] font-[500]"
        >
          Stoc
        <span className="text-cyan-300">X</span>
          cel
        </h1>
        <hr className="w-[100px] bg-cyan-300 h-[1px] border-transparent" />
      </div>
      <div className='flex gap-4'>
        <Link href="https://github.com/WayneNtkM">
          <BsGithub className='text-white text-[26px]' />
        </Link>
        <Link href="https://www.linkedin.com/in/wayne-takahashi/">
          <BsLinkedin className='text-white text-[26px]' />
        </Link>
      </div>
      <div>
        <small className='text-white'>
          © 2023 StocXcel. Desenvolvido por Wayne.
        </small>
      </div>
    </footer>
  )
}
