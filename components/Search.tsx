import useObserver from "../hooks/useObeserver";
import {BiSearchAlt} from 'react-icons/bi';

function Search() {
  const { ref, view } = useObserver<HTMLHeadingElement>();
  return (
    <div className="flex-col w-[100%] bg-transparent">
    <div
      ref={ref}
      className={ `${view?.isIntersecting ? 'animate-scale' : ''}
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
  );
}

export default Search;