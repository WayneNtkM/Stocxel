import React from 'react';
import FormSimulate from './smallComponents/FormSimulate';
import SimulateResults from './smallComponents/SimulateResults';
import useCalculatorStore from '@/store/investmentCalculador';

export default function SimulateForm() {
  const { isActive } = useCalculatorStore();

  return (
    <div>
      <div className='p-[2em] text-black flex flex-col gap-2 justify-center items-center'>
        <strong className='text-[33px] leading-[38px] font-[700]'>
          Calculadora de investimentos
        </strong>
        <p className='text-[16px] font-[600] text-[#666] leading-[24px]'>
          Simule seu investimento com base na taxa anual
        </p>
      </div>
      <FormSimulate />
      {isActive && <SimulateResults />}
    </div>
  )
}
