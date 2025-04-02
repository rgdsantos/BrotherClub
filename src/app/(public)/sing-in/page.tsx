'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "../../../services/api";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import Logo from "../../../assets/Logo.png";
import Image from 'next/image';

export default function Singin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function aboutus() {
    router.push('/about-us');
  }

  async function handleLogin() {
    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const res = await api.post('/api/login.php', { email, password });

      if (res.data.success) {
        // Salva o token no cookie com path global para o middleware
        Cookies.set('token', res.data.token, {
          expires: 7,
          path: '/' 
        });

        router.push('/'); // ou /profile, /home, etc
      } else {
        alert(res.data.error || 'Erro ao logar.');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
      console.error(error);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center p-50 colu">
        <div className='items-center justify-center p-10 border rounded-lg w-250 bg-black'>
          <div className='b1 items-center justify-center'>
            <Image src={Logo} alt="Logo" width={350} height={100} />
          </div>

          <div className='text-white text-center'>
            <p>Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</p>
            <p>Conheça novas pessoas através de amigos de seus amigos e comunidades</p>
            <p>Compartilhe seus vídeos, fotos e paixôes em um só lugar</p>
          </div>
        </div>

        <div className='p-6 max-w-4xl mx-auto flex-direction-collum alins-center margin-5'>
          <div className="border rounded-lg p-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <h1>Acesse o orkut com a sua conta</h1>
              <Input
                placeholder='E-mail'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder='Senha'
                name='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='button' onClick={handleLogin} variant="default">
                ENTRAR
              </Button>
              <p>Esqueceu a senha?</p>
            </form>
          </div>

          <div className="border rounded-lg p-2">
            <p>Ainda não é membro?</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button type='button' variant="link">CRIAR CONTA</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Registrar</DialogTitle>
                  <DialogDescription>Criar uma nova conta.</DialogDescription>
                  <form className="space-y-6">
                    <div className="grid grid-cols-4 items-center text-right gap-3">
                      <Label htmlFor="name">Nome</Label>
                      <Input className="col-span-3" id="name" />
                    </div>

                    <div className="grid grid-cols-4 items-center text-right gap-3">
                      <Label htmlFor="email">E-mail</Label>
                      <Input className="col-span-3" id="email" type="email" />
                    </div>

                    <div className="grid grid-cols-4 items-center text-right gap-3">
                      <Label htmlFor="password">Senha</Label>
                      <Input className="col-span-3" id="password" type="password" />
                    </div>

                    <div className="grid grid-cols-4 items-center text-right gap-3">
                      <Label htmlFor="repassword">Confirme a senha</Label>
                      <Input className="col-span-3" id="repassword" type="password" />
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button type="submit">Criar</Button>
                    </DialogFooter>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center gap-2 mt-6">
        <p>@ 2025 Orkut -</p>
        <Button onClick={aboutus} type='button' variant="link">Sobre nós</Button>
        <Button type='button' variant="link">Centro de Segurança</Button>
        <Button type='button' variant="link">Privacidade</Button>
        <Button type='button' variant="link">Termos</Button>
      </div>
    </div>
  );
}