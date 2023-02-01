import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function Nav() {
  const { data } = useSession();
  
  if (!data || !data.user) {
    return (
      <div>
          <button type='button' onClick={ () => signIn() }>SignIn</button>
        </div>
    )
  }
  return (
    <div>
      <img
        src={ data.user.image as string }
        alt={ data.user.name as string }
        width={30}
        height={100}
        className='rounded-[100%]'
      />
      <button type='button' onClick={ () => signOut() }>SignOut</button>
    </div>
  );
}
