import Image from "next/image";
import useFetcher from "../hooks/useFetcher";
import { StocksSorted } from "../types/objectTypes";
import { AiOutlineArrowUp } from 'react-icons/ai';

function Carousel() {
  const { stocks } = useFetcher();

  console.log();
  
  return (
    <div className="w-[100%] overflow-hidden h-[100px] relative grid mb-8">
        <div className="flex w-calc animate-carousel hover:pause">
          {stocks.sorted.firstSet.map(({ change, close, logo, stock}: StocksSorted) => (
            <div className="flex pl-[30px] w-[350px]" key={stock}>
              <Image
                src={logo}
                alt={stock}
                width={50}
                height={50}
                className="w-[80px] h-[80px] mr-[2em] rounded"
              />
              <div className="flex flex-col mt-4">
                <h2 className="text-[20px] font-[600]">{stock}</h2>
                <div className="flex items-center text-[16px] font-[600] text-green-600">
                  <span>{`R$${close}`}</span>
                  <AiOutlineArrowUp />
                  <span>{`. ${change.toFixed(2)}%`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Carousel;