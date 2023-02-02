import React from 'react'
import Header from './Header'
import Link from 'next/link'
import DivStocksFII from './smallComponents/Div.StocksFII'
import DivSimulate from './smallComponents/Div.Simulate'

export default function Home() {
  return (
    <div className='w-[100vw] flex flex-col gap-4 mb-4'>
      <Header />
      <div className='w-[100vw] flex flex-col gap-8'>
        <DivStocksFII />
        <DivSimulate />
      </div>
      <hr className='w-[300px] bg-slate-800 m-auto border-transparent' />
    </div>
  )
}
