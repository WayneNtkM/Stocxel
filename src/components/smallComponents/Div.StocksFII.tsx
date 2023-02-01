import Link from 'next/link'
import React from 'react'

export default function DivStocksFII() {
  return (
    <div className='flex flex-col items-center gap-[1em] p-[2em]'>
          <strong className='text-[38px] leading-[58px] font-[700]'>
            Busque por <b>ações</b> e <b>FIIS</b>
          </strong>
          <p className='text-[16px] font-[600] text-[#666] leading-[24px]'>
            Busque por ativos nacionais e fundos imobiliários
          </p>
          <Link
            href="/stocks"
            className={`p-[10px] text-[16px] font-[700] uppercase text-center
              text-white bg-[#0084d5] border
              border-black w-[300px] rounded-[6px] border-none`}
          >
            Começar
          </Link>
        </div>
  )
}
