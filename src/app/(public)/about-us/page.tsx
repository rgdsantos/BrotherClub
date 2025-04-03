'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Aboutus() {
  const router = useRouter();

  function singin() {
    router.push('/sing-in');
  }

  return (
    <div>
      <div className="flex items-center justify-center text-center gap-2 mt-6">
        <p>@ 2025 Orkut -</p>
        <Button onClick={singin} type='button' variant="link">Inicio</Button>
        <Button type='button' variant="link">Centro de Segurança</Button>
        <Button type='button' variant="link">Privacidade</Button>
        <Button type='button' variant="link">Termos</Button>
      </div>
    </div>
  );
}
