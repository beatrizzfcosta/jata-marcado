# JÁTÁ

## Descrição
O **JáTá (marcado)** é uma plataforma web para agendamento de serviços de forma simples e rápida.  
Permite que **clientes** reservem horários e **prestadores** gerenciem suas agendas, notificações e confirmações de marcações.

**Quem usa a solução?**  
- Clientes que desejam agendar serviços.  
- Prestadores que precisam gerir horários e reservas.  
- Administradores responsáveis pelo monitoramento da plataforma.  

**O que a solução faz?**  
- Registos de serviços e horários disponíveis.  
- Agendamento e cancelamento online.  
- Notificações automáticas por e-mail.  
- Painel de controlo para prestadores e administradores.  

**Arquitetura:**
- **Monorepo** com **Turborepo** e **pnpm workspaces**.
- **apps/**
  - **web** — aplicação Next.js para clientes.
  - **admin** — aplicação Next.js para administração.
  - **api** — API REST com Node.js/Express.
- **packages/**
  - **ui** — biblioteca de componentes React compartilhada.
  - **db** — schema e cliente Prisma para PostgreSQL.
  - **utils** — funções utilitárias comuns.
  - **config** — configurações de lint, prettier e tsconfig.

**Stack:**
- **Frontend:** Next.js, React, Tailwind CSS.
- **Backend:** Node.js, Express, Prisma ORM.
- **Banco de Dados:** PostgreSQL.
- **Autenticação:** JWT.
- **Infraestrutura:** Docker, CI/CD.
- **Documentação de API:** Swagger.
- **Monitoramento:** Sentry, UptimeRobot.

---

## 💻 Execução do Código

**Pré-requisitos:**
- Node.js 18+
- pnpm 9+
- Docker (para rodar banco de dados localmente)

**Instalação e execução local:**
```bash
