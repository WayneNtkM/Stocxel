import { useEffect, useState } from "react";
import Fetcher from "../pages/api/stocks";

export default function useFetcher() {
  const [stocks, setStocks] = useState({
    stocks: [],
    sorted: { firstSet: [] }
  });
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const fetcher = new Fetcher();
        const data = await fetcher.getAllStcoks();
        const sortedArr = data.stocks
        .sort((a: { change: number }, b: { change: number }) => b.change - a.change);
        setStocks({ 
          stocks: data.stocks,
          sorted: {
            firstSet: sortedArr.slice(0, 9),
          }
        });
        
      } catch (error: any) {
        setError(error);
      }
    })();
  }, []);

  return { stocks, error };
} 