
# 🧿 BrotherClub (Clone do Orkut)

Bem-vindo ao **BrotherClub**, uma rede social inspirada no clássico **Orkut**, recriada com tecnologias modernas como **Next.js**, **PHP** e **MySQL**. Um espaço para se conectar com amigos, comunidades e reviver a nostalgia dos anos 2000, com um toque moderno!

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- [Next.js 13+](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadCN/UI](https://ui.shadcn.com/)
- [js-cookie](https://github.com/js-cookie/js-cookie)

### Backend:
- PHP 8+
- MySQL/MariaDB
- API REST simples
- JWT ou Token manual

---

## 📁 Estrutura de Pastas

```
BrotherClub/
├── public/               # Imagens públicas
├── src/
│   ├── app/              # Rotas do Next.js (sing-in, profile, etc)
│   ├── components/       # Componentes reutilizáveis
│   ├── assets/           # Imagens (logo etc.)
│   └── services/         # Axios configurado (api.ts)
backend/
├── api/                  # login.php, register.php, etc
└── config/               # db.php, cors.php
```

---

## 🚀 Como rodar o projeto

### 🔧 Requisitos

- Node.js 18+
- PHP 8+
- MySQL rodando localmente
- Composer

### 🔌 Frontend

```
cd BrotherClub
npm install
npm run dev
```

Acesse: `http://localhost:3000`

### 🐘 Backend

Coloque a pasta `backend/` em seu servidor local (ex: `htdocs` do XAMPP, `www` do Laragon)

Acesse via:
```
http://localhost/backend/api/login.php
```

⚠️ Não se esqueça de ajustar o CORS:
```php
header("Access-Control-Allow-Origin: *");
```

---

## 🔐 Autenticação

- Ao fazer login, o frontend recebe um **token**
- Esse token é salvo em um **cookie HTTP**
- O **middleware do Next.js** verifica esse token e protege as rotas privadas
- Logout apaga o cookie e redireciona

---

## 📸 Funcionalidades

- [x] Login com validação de token
- [x] Registro de novos usuários
- [x] Proteção de rotas com middleware
- [x] Layout estilizado com Tailwind + ShadCN
- [x] Página de perfil
- [ ] Comunidades (em breve)
- [ ] Solicitações de amizade (em breve)
- [ ] Feed com atualizações (em breve)

---

## 📷 Preview

![BrotherClub Preview](public/screenshot.png)

---

## 💡 Ideias futuras

- Upload de foto de perfil
- Feed com posts públicos e privados
- Chat entre amigos
- Tema claro/escuro
- Deploy com Vercel + banco em PlanetScale

---

## 👨‍💻 Desenvolvedor

**Rodrigo Gomes dos Santos**  
📍 Rio de Janeiro, RJ  
🖥️ Analista de Infraestrutura + Dev 
🔗 [rodrigogsantos.com.br](https://rodrigogsantos.com.br)

---

## 📄 Licença

Este projeto é open-source e gratuito. Use como quiser!
