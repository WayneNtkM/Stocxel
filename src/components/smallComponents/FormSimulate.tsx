import useCalculatorStore, { useCalculatorResults } from '@/store/investmentCalculador'
import calculator, { feesCalculator } from '@/utils/calc/interest';
import React from 'react'
import { BsPercent } from 'react-icons/bs';
import { CiTimer } from 'react-icons/ci';

export default function FormSimulate() {
  const { handleChange, handleRadioChange, handleClear,
    c, p, r, t, rateType, length, type, setActive } = useCalculatorStore();
  const { setValues } = useCalculatorResults();

  const handleSubmit = () => {
    const result = calculator({ c, p, length, r, rateType, t }).compoundMonth();

    const { fee, grossValue, netValue } = feesCalculator({
      c,
      time: t,
      value: result,
      investType: type,
      period: length,
    }).calcFee();
    setActive();
    setValues({ fee, grossValue, netValue });
  };

  const isDisabled = () => c === '' || r === '' || type === '';

  return (
    <form className='p-[2em] text-black flex flex-col gap-4 justify-center items-start'>
      <label className='text-[16px] font-[600] text-[#302f2f] leading-[24px] w-[100%]'>
        Tipo de investimento
        <div className='flex gap-4 mt-2'>
          <label className='flex gap-2' htmlFor='inv_type_1'>
            <input
              type="radio"
              id='inv_type_1'
              name='type'
              value='CDB/LC'
              onChange={ handleRadioChange }
            />
            CDB/LC
          </label>
          <label className='flex gap-2' htmlFor='inv_type_2'>
            <input
              type="radio"
              id='inv_type_2'
              name='type'
              value='LCI/LCA'
              onChange={ handleRadioChange }
            />
            LCI/LCA
          </label>
        </div>
      </label>
      <label className='text-[16px] font-[600] text-[#302f2f] leading-[24px] w-[100%]'>
        Aportes mensais
        <div className='flex gap-[0.7em] rounded-[7px] overflow-hidden mt-2'>
          <div className='flex w-[100%]'>
            <span className='text-[16px] bg-[#8bd0d8] p-2'>R$</span>
            <input
              type="number" 
              className='bg-slate-200 w-[100%] pl-4'
              name='c'
              placeholder='0,00'
              value={ c }
              onChange={ handleChange }
              />
          </div>
        </div>
      </label>
      <label className='text-[16px] font-[600] text-[#302f2f] leading-[24px] w-[100%]'>
        Período
        <div className='flex gap-[0.7em] rounded-[7px] overflow-hidden mt-2'>
          <div className='flex rounded-md overflow-hidden'>
            <span className='text-[22px] bg-[#8bd0d8] p-2'><CiTimer /></span>
            <input
              type="number"
              className='bg-slate-200 w-[180px] pl-4'
              name='t'
              value={ t }
              onChange={ handleChange }
            />
          </div>
          <select
            className='bg-[#66afb7] rounded-md w-[100px] text-center p-2 text-white'
            name="length"
            onChange={ handleChange }
          >
            <option value="monthly" className='text-black'>
              meses
            </option>
            <option value="annually">
              anos
            </option>
          </select>
        </div>
      </label>
      <label className='text-[16px] font-[600] text-[#302f2f] leading-[24px] w-[100%]'>
        Taxa de juros
        <div className='flex gap-[0.7em] overflow-hidden mt-2'>
          <div className='flex rounded-md overflow-hidden'>
            <span className='text-[22px] bg-[#8bd0d8] p-2'><BsPercent /></span>
            <input
              type="number"
              className='bg-slate-200 w-[180px] pl-4'
              placeholder='0,00'
              name='r'
              value={ r }
              onChange={ handleChange }
            />
          </div>
          <select 
            className={`bg-[#66afb7] rounded-md w-[100px] text-center text-white`} 
            name="rateType"
            onChange={ handleChange }
          >
            <option value="monthly" className='text-black'>
              mensal
              </option>
            <option value="annually">anual</option>
          </select>
        </div>
      </label>
      <div className='w-[100%] flex items-center mt-6 gap-2'>
        <button 
          type='button' 
          onClick={ handleSubmit }
          className='bg-[#061c57] p-2 w-[100px] text-white rounded-md disabled:opacity-75'
          disabled={ isDisabled() }
        >
          Calcular
        </button>
        <button 
          type='button' 
          onClick={ handleClear }
          className='bg-[#061c57] p-2 w-[100px] text-white rounded-md'
        >
          Limpar
        </button>
      </div>
    </form>
  )
}
