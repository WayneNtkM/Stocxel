import useObserver from "../hooks/useObeserver";
import {BiSearchAlt} from 'react-icons/bi';

export default function Main() {
  const { ref, view } = useObserver<HTMLHeadingElement>();
  const { ref: ref2, view: view2 } = useObserver<HTMLHeadingElement>();

  return (
    <main
    className="w-[90vw] h-screen flex-col justify-around items-center p-4 m-auto"
    >
        <div className="mb-4">
          <h1
            ref={ref}
            className={ `${view?.isIntersecting ? 'animate-fadeIn' : ''} text-[17px]
            font-[helvetica nue] text-center font-[600] text-neutral-800/[0.9]` }
          >
            Busque por ativos nacionais e fundos imobiliários.
          </h1>
        </div>

        <div className="flex-col w-[100%] bg-transparent">
          <div
            ref={ref2}
            className={ `${view2?.isIntersecting ? 'animate-scale' : ''}
            cursor-pointer flex items-center border
            border-black/[0.4] rounded-[7px]` }
          >
            <input
              type="text"
              className=" w-[300px] h-[50px] p-3 bg-transparent"
              placeholder="Digite o código do ativo"
            />
            <button type="button" className="text-2xl text-gray-800 bg-transparent"><BiSearchAlt /></button>
          </div>
        </div>
      </main>
  );
}
