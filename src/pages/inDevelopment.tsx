import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { BsFillGearFill } from 'react-icons/bs'

export default function inDevelopment() {
  return (
    <div className='h-[100%]'>
      <Header />
      <div className='p-8 flex flex-col items-center w-[100%] justify-center'>
        <BsFillGearFill className='text-[70px] animate-rotate' />
        <div className='flex flex-col items-center text-center gap-4'>
          <h1 className='text-[38px] font-[700]'>Obrigado pela empolgação</h1>
          <p className='font-[600] text-[17px]'>Essa página ainda está em desenvolvimento.
            Fique à vontade para usufruir das outras funcionalidades do site.
          </p>
        </div>
        <div>
          <ul className='flex gap-4'>
            {[['Consulta', '/stocks'],
            ['Calculadora', '/simulate'],
            ['Perfil', '/profile']].map((e, i) => {
              const [service, route] = e;
              return (
                <li className='h-[40px]' key={i}>
                  <Link href={route}>
                      <p className='text-[18px] font-[600] 
                        h-[40px] mt-4 text-[#2997ff]'
                      >
                          {service}
                        </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <hr className='w-[90%] mt-20 bg-black/[0.8] border-transparent' />
      </div>
      <Footer />
    </div>
  )
}
