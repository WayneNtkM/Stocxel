import useObserver from "../hooks/useObeserver";
import {BiSearchAlt} from 'react-icons/bi';
import { trpc } from "@/utils/trpc";
import Image from "next/image";
import { useState } from "react";
import { useCallback } from "react";

function Search() {
  const { ref, view } = useObserver<HTMLHeadingElement>();
  const { data, isLoading } = trpc.stocks.useQuery();
  const [input, setInput] = useState('');

  const handleChange = useCallback(({ target: { value } }: { target: { value: string } }) => {
    setInput(value);
  }, [])

  if (isLoading || !data) return <div>Loading...</div>

  return (
    <div className="flex-col w-[100%] bg-transparent">
    <div
      ref={ref}
      className={ `${view?.isIntersecting ? 'animate-scale' : ''}
      cursor-pointer flex items-center border
      border-black/[0.4] rounded-[7px] mb-4` }
    >
      <input
        onChange={handleChange}
        type="text"
        className=" w-[300px] h-[50px] p-3 bg-transparent"
        placeholder="Digite o código do ativo"
      />
      <button type="button" className="text-2xl text-gray-800 bg-transparent"><BiSearchAlt /></button>
    </div>
    <div className="flex flex-col gap-4 p-2 animate-scale">
      {data.stocks
        .filter(({ stock, name }) => stock.toLocaleLowerCase()
          .includes(input.toLocaleLowerCase()) || name.toLocaleLowerCase()
          .includes(input.toLocaleLowerCase()))
        .slice(0, 9).map(({ change, close, logo, name, stock }) => (
        <div className="flex items-center justify-between" key={ stock }>
          <div className="flex ">
            <Image
              alt={stock}
              src={logo}
              width={0}
              height={0}
              className="w-[40px] h-[40px] rounded-[7px]"
            />
            <div className="flex flex-col ml-3">
              <h2 className="text-[20px] font-[500]">{stock}</h2>
              <span className="text-[14px]">{` - | ${name}`}</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`flex flex-col
              items-center
              ${change.toString().includes('-') ? 'text-red-600' : 'text-green-600'}`}>
              <span className="text-[14px]">{`${change.toString().includes('-') ? '' : '+'}${change.toFixed(2)}%`}</span>
              <span className="text-[16px]">{`R$${close.toFixed(2)}`}</span>
            </div>
          </div>
        </div>
      ))}
      <hr className="w-[60%]" />
    </div>
  </div>
  );
}

export default Search;