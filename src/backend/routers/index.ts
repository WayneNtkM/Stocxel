import { z } from 'zod';
import { procedure, router } from '../trpc';
import Userservice from '../services/User.service';

interface Stocks { 
  stocks: [{ 
    change: number;
    close: number;
    logo: string;
    market_cap: number;
    name: string;
    sector: string;
    stock: string;
    volume: number;
  }] 
}

export const appRouter = router({
  stocks: procedure.query(async () => {
    const response = await fetch('https://brapi.dev/api/quote/list?');
    const data: Stocks = await response.json();
    const sortedArr = data.stocks
      .sort((a, b) => b.change - a.change);
    return {
      stocks: data.stocks,
      sorted: sortedArr.slice(0, 9),
    };
  }),
  // user: procedure.input({  }).mutation(),
});

// export type definition of API
export type AppRouter = typeof appRouter;