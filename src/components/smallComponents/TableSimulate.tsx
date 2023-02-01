import useCalculatorStore, { moneyFormat, useCalculatorResults } from '@/store/investmentCalculador';
import React from 'react';

export default function TableSimulate() {
  const { fee, grossValue, netValue } = useCalculatorResults()
  const { c, t, length } = useCalculatorStore()

  const period = length === 'monthly' ? Number(t) : Number(t) * 12;

  return (
    <table className='mt-8'>
      <tbody>
        <tr className='bg-[#E5EFFF] border-t-2 border-black/[0.3]'>
          <td className='p-4 font-[700]'>
            <p>Dinheiro investido</p>
          </td>
          <td className='p-4 w-[140px] text-end'>{`${moneyFormat.format(Number(c) * period)}`}</td>
        </tr>
        <tr className='border-t-2 border-black/[0.3]'>
          <td className='p-4 font-[700]'>Rendimento</td>
          <td className='p-4 w-[140px] text-end'>{`${moneyFormat.format(netValue - (Number(c) * period))}`}</td>
        </tr>
        <tr className='bg-[#E5EFFF] border-t-2 border-black/[0.3]'>
          <td className='p-4 font-[700]'>TOTAL BRUTO</td>
          <td className='p-4 w-[140px] text-end'>{`${moneyFormat.format(grossValue)}`}</td>
        </tr>
        <tr className='border-t-2 border-black/[0.3]'>
          <td className='p-4 font-[700]'>IR sobre o rendimento</td>
          <td className='p-4 w-[140px] text-end'>{`${moneyFormat.format((fee / 100) * (netValue - (Number(c) * period)))}`}</td>
        </tr>
        <tr className='bg-[#E5EFFF] border-t-2 border-b-2 border-black/[0.3]'>
          <td className='p-4 font-[700]'>TOTAL LIQUÍDO</td>
          <td className='p-4 w-[140px] text-end'>{`${moneyFormat.format(netValue)}`}</td>
        </tr>
      </tbody>
    </table>
  )
}
