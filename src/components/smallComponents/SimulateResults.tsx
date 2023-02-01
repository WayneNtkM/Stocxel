import useCalculatorStore, { useCalculatorResults } from '@/store/investmentCalculador'
import React from 'react'

export default function SimulateResults() {
  const { length, rateType, r, t, c } = useCalculatorStore();
  const { fee, grossValue, netValue } = useCalculatorResults()

  const period = length === 'monthly';
  const periodRate = rateType === 'monthly';

  return (
    <div className='p-8'>
        <p>{`Investindo R$${Number(c).toFixed(2)} mesalmente, durante ${t}
          ${period ? 'meses' : 'anos'}, 
          a uma taxa de ${r}% ao ${periodRate ? 'mês' : 'ano'}
          , o valor líquido ao final desse período será:`}
        </p>
        <p>{`R$${netValue.toFixed(2)}`}</p>
      </div>
  )
}
