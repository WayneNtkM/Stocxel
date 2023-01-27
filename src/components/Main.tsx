import { trpc } from "@/utils/trpc";
import useObserver from "../hooks/useObeserver";
import Carousel from "./Carousel";
import Search from "./Search";
import Loading from "./Loading";

export default function Main() {
  const { ref, view } = useObserver<HTMLHeadingElement>();
  const { data, isLoading } = trpc.stocks.useQuery();

  if (isLoading || !data) return <Loading />

  return (
    <main
    className="w-[90vw] h-screen flex-col justify-around items-center p-4 m-auto"
    >
        <div className="mb-8">
          <h1
            ref={ref}
            className="text-[24px] font-[helvetica nue] text-center font-[600] text-neutral-800/[0.9]"
          >
            Ativos nacionais e fundos imobiliários.
          </h1>
          <h1 className={`text-[12px] text-center
            ${view?.isIntersecting ? 'animate-scale' : ''}`}>
            valores podem estar desatualizados ou conter inconsistências
          </h1>
        </div>
        <Carousel />
        <Search />
      </main>
  );
}
