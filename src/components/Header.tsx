import Link from "next/link";

export default function Header() {
  return (
    <header className={`w-screen flex justify-around
      items-center mb-5 bg-slate-100 
      sticky top-0 z-[1] h-[70px] border-b-[1px] border-b-gray-500`}>
        <div className="antialiased">
          <Link href='/'>
            <h1
              className="text-[28px] w-40 text-black font-[Helvetica] font-[600]"
            >
              Stoc
            <span className="text-[#007aff]">X</span>
              cel
            </h1>
            <hr className="w-[100px] text-[#007aff] h-[1px] border-transparent" />
          </Link>
        </div>
        <div className="w-[100px] h-[50px]" />
      </header>
  );
}
