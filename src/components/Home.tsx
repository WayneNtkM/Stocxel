import React from 'react'
import Header from './Header'
import Link from 'next/link'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Header />
      <div className='w-[100vw] h-[100vh] p-[2em]'>
        <div className='flex flex-col items-center gap-[1em]'>
          <strong className='text-[38px] leading-[58px] font-[700]'>
            Busque por <b>ações</b> e <b>FIIS</b>
          </strong>
          <p className='text-[16px] font-[600] text-[#666] leading-[24px]'>
            Busque por ativos nacionais e fundos imobiliários
          </p>
          <Link
            href="/stocks"
            className={`p-[4px] text-[16px] font-[700] uppercase text-center
              text-white bg-[#0084d5] border border-black w-[300px] rounded-[6px]`}
          >
            Começar
          </Link>
        </div>
      </div>
    </div>
  )
}
