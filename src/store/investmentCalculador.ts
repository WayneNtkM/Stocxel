import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface IValue {
  fee: number,
  grossValue: number,
  netValue: number
}

const initialState = {
  p: '',
  r: '',
  t: '1',
  c: '',
  length: 'monthly',
  rateType: 'monthly',
  type: '',
  isActive: false,
}

const useCalculatorStore = create(
  combine({ ...initialState }, (set) => ({
    handleChange: ({ target: { name, value } }: any) => set((state) => ({ ...state, [name]: value })),
    handleClear: () => set(() => ({ ...initialState, isActive: false })),
    handleRadioChange: ({ target: { name, value } }: any) => set((state) => ({ ...state, [name]: value })),
    setActive: () => set(() => ({ isActive: true })),
  }))
);

export const useCalculatorResults = create(
  combine({ fee: 0, grossValue: 0, netValue: 0 }, (set) => ({
    setValues: ({ fee, grossValue, netValue }: IValue) => set((state) => ({ ...state, fee, grossValue, netValue })),
  }))
);

export const moneyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
});

export default useCalculatorStore;