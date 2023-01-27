import Link from 'next/link'
import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className={`flex flex-col gap-[1.5em] bg-slate-100 
        w-[100vw] h-[auto] p-[2em] bottom-0 relative`}>
      <div>
        <h1
          className="text-[28px] w-40 text-[#121212] font-[Helvetica] font-[700]"
        >
          S
        <span className="text-[#007aff] text-[28px]">X</span>
          cel
        </h1>
        <hr className="w-[100px] bg-[#007aff] h-[1.7px] border-transparent" />
      </div>
      <div className='flex gap-4'>
        <Link href="https://github.com/WayneNtkM">
          <BsGithub className='text-black text-[26px]' />
        </Link>
        <Link href="https://www.linkedin.com/in/wayne-takahashi/">
          <BsLinkedin className='text-black text-[26px]' />
        </Link>
      </div>
      <div>
        <small className='text-black'>
          © 2023 StocXcel. Desenvolvido por Wayne.
        </small>
      </div>
    </footer>
  )
}
