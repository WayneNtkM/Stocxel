import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  
  return (
    <div className='p-8'>
      <ul className='w-[100%] text-start align-middle'>
        <li className='h-[40px] border-b border-b-[rgba(79,77,77,0.85)]'>
          <Link href="/stocks" className='h-[100%]'>
              <p className='text-[16px] h-[40px] mt-4'>Consulta de ativos </p>
          </Link>
        </li>
        <li className='h-[40px] border-b border-b-[rgba(79,77,77,0.85)]'>
          <Link href="/simulate">
              <p className='text-[16px] h-[40px] mt-4'>Calculadora de juros compostos</p>
          </Link>
        </li>
        <li className='h-[40px] border-b border-b-[rgba(79,77,77,0.85)]'>
          <Link href="/profile">
              <p className='text-[16px] mt-4'>Perfil</p>
          </Link>
        </li>
        <li className='h-[40px] border-b border-b-[rgba(79,77,77,0.85)]'>
          <Link href="/inDevelopment">
              <p className='text-[16px] h-[40px] mt-4'>Carteira</p>
          </Link>
        </li>
        <li className='h-[40px] border-b border-b-[rgba(79,77,77,0.85)]'>
          <Link href="/inDevelopment">
              <p className='text-[16px] h-[40px] mt-4'>Favoritos</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
