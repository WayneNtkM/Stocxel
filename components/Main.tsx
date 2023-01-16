import useObserver from "../hooks/useObeserver";

export default function Main() {
  const { ref, view } = useObserver<HTMLHeadingElement>();
  const { ref: ref2, view: view2 } = useObserver<HTMLHeadingElement>();

  return (
    <main className="w-screen h-screen flex-col justify-around items-center">
        <h1 ref={ref} className={ view?.isIntersecting ? 'opacity-1' : 'opacity-0' }>Ola, beleza?</h1>
        <div className="h-24" />
        <div className="h-24" />
        <div className="h-24" />
        <div className="h-24" />
        <div className="h-24" />
        <div className="h-24" />
        <div className="h-24" />
        <div className="h-24" />
        <h1 ref={ref2} className={ view2?.isIntersecting ? 'opacity-0' : 'opacity-1' }>Ola, beleza?</h1>
      </main>
  );
}
