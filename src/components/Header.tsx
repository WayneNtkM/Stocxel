import Link from "next/link";
import Nav from "./Nav";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVisible])

  return (
    <header className={`w-screen flex justify-around
      items-center mb-5 bg-[rgb(0,0,0)]
      sticky top-0 z-[1] h-[70px] border-b-[0.8px] border-b-[rgba(79,77,77,0.85)]`}>
        <div className="antialiased">
          <Link href='/'>
            <h1
              className="text-[28px] w-40 text-white font-[Helvetica] font-[600]"
            >
              Stoc
            <span className="text-[#007aff]">X</span>
              cel
            </h1>
            <hr className="w-[100px] text-[#007aff] h-[1px] border-transparent" />
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="text-white"
            onClick={ () => setVisibility((prev) => !prev) }
          >
            Menu
          </button>
        </div>
        <div className={`absolute text-white
          w-[100%] h-[100vh] top-[4.4em] bg-[rgb(0,0,0)]
          ${isVisible ? 'visible' : 'hidden'}`}>
          <Nav />
        </div>
      </header>
  );
}
