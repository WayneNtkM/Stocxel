import useCalculatorStore, { moneyFormat, useCalculatorResults } from '@/store/investmentCalculador'
import React from 'react'
import TableSimulate from './TableSimulate';

export default function SimulateResults() {
  const { length, rateType, r, t, c } = useCalculatorStore();
  const { netValue } = useCalculatorResults()

  const period = length === 'monthly';
  const periodRate = rateType === 'monthly';

  return (
    <div className='p-8'>
        <p className='mb-2 text-center'>
          {`Investindo R$${Number(c).toFixed(2)} mesalmente, durante ${t}
          ${period ? 'meses' : 'anos'}, 
          a uma taxa de ${r}% ao ${periodRate ? 'mês' : 'ano'}
          , o valor líquido ao final desse período será:`}
        </p>
        <p className='text-[28px] font-[700] text-center'>{`R$${moneyFormat.format(netValue)}`}</p>
        <div className='mt-8'>
          <h2 className='mb-4 text-center w-[100%] font-[600] text-[20px]'>Resultado da simulação</h2>
          <TableSimulate />
        </div>
      </div>
  )
}
