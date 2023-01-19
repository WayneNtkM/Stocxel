export default function Header() {
  return (
    <header className="w-screen flex justify-around items-center mb-5 bg-black/[0.8]">
        <div className="antialiased">
          <h1
            className="text-2xl w-40 text-white font-[Helvetica] font-[500]"
          >
            Stoc
          <span className="text-cyan-300">X</span>
            cel
          </h1>
          <hr className="w-[100px] bg-cyan-300 h-[1px] border-transparent" />
        </div>
        <div className="w-[100px] h-[50px]" />
      </header>
  );
}
