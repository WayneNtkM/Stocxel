import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function DivSimulate() {
  return (
    <div className='bg-[#1d1d1f] h-[304px]'>
      <div className='p-[2em] text-white flex flex-col gap-2 justify-center items-center'>
        <strong className='text-[33px] leading-[58px] font-[700]'>
          Opções de simulação
        </strong>
        <p className='text-[16px] text-center font-[600] text-[#666] leading-[24px]'>
          Simule seu investimento com base na taxa anual
        </p>
        <Link
          href="/simulate"
          className={`text-[16px] font-[700] uppercase text-center
            text-white w-[300px]`}
        >
          <div className='w-[300px] flex items-center p-4 gap-4 bg-[#363839] rounded-[6px] border-none'>
            <p>Simule um investimento</p>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  )
}
