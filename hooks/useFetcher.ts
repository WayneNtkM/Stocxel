import { useEffect, useState } from "react";
import Fetcher from "../pages/api/stocks";

export default function useFetcher() {
  const [stocks, setStocks] = useState({ stocks: [], sorted: [] });
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const fetcher = new Fetcher();
        const data = await fetcher.getAllStcoks();
        setStocks({ 
          stocks: data.stocks,
          sorted: data.stocks
            .sort((a: { change: number }, b: { change: number }) => b.change - a.change)
            .slice(0, 9),
        });
        
      } catch (error: any) {
        setError(error);
      }
    })()
  }, []);

  return { stocks, error };
} 