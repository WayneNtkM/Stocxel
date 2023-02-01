import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function Nav() {
  const { data } = useSession();
  console.log(data);
  

  if (data) {
    return (
      <div>
        <button type='button' onClick={ () => signOut() }>SignOut</button>
      </div>
    );
  }
  return (
    <div>
        <button type='button' onClick={ () => signIn() }>SignIn</button>
      </div>
  )
}
