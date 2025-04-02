'use client';

import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';



export default function Home() {

  const router = useRouter();
  
  function logout() {
    Cookies.remove('token', { path: '/' });
    router.push('/sing-in');
  }

  return (
    <div>
      <h1>Perfil</h1>
      <Button onClick={logout} type='button'>Sair</Button>
    </div>
  );
}
