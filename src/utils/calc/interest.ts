interface Options {
  c?: string;
  length: string;
  p: string;
  r: string;
  rateType: string;
  t: string;
}

interface IFee {
  investType: string;
  value: string;
  time: string;
  period: string;
  c: string;
}

const calcFee = (month: number) => {
  const days = month * 30;
  if (days <= 180) return 22.5;
  if (days > 180 && days <= 360) return 20;
  if (days > 360 && days <= 720) return 17.5;
  return 15;
}

export function feesCalculator({ investType, value, time, period, c }: IFee) {
  const investTime = period === 'monthly' ? Number(time) : Number(time) * 12;
  
  const totalYield = Number(value) - (Number(c) * Number(investTime));
  return {
    calcFee: function() {
      const fee = calcFee(investTime);
      const netValue = Number(value) - (totalYield * (fee / 100))
      if (investType === 'LCI/LCA') {
        return { grossValue: Number(value), netValue: Number(value), fee: 0 };
      }
      return { grossValue: Number(value), netValue, fee };
    }
  }
}

export default function calculator(options: Options) {
  const { p, r, t, c, rateType, length } = options;
  const rate = rateType === 'annually' ? Number(r) / 12 : Number(r);
  const time = length === 'annually' ? Number(t) * 12 : Number(t);

  return {
    simple: function() {
      return (Number(p) * Number(rate) * time).toFixed(2);
    },
    compound: function() {
      return (Number(p) * (((1 + Number(rate)) ** time) - 1)).toFixed(2);
    },
    compoundMonth: function() {
      if (c) {
        return ((Number(c) * (((1 + (rate / 100)) ** time) - 1)) / (rate / 100)).toFixed(2);
      }
      return 'Aporte mensal não providenciado';
    }
  }
}