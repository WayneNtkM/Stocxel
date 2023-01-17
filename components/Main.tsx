import useObserver from "../hooks/useObeserver";
import Carousel from "./Carousel";
import Search from "./Search";

export default function Main() {
  const { ref, view } = useObserver<HTMLHeadingElement>();

  return (
    <main
    className="w-[90vw] h-screen flex-col justify-around items-center p-4 m-auto"
    >
        <div className="mb-8">
          <h1
            ref={ref}
            className={ `${view?.isIntersecting ? 'animate-fadeIn' : ''} text-[17px]
            font-[helvetica nue] text-center font-[600] text-neutral-800/[0.9]` }
          >
            Busque por ativos nacionais e fundos imobiliários.
          </h1>
        </div>
        <Carousel />
        <Search />
      </main>
  );
}
