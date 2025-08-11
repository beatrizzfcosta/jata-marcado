# 🚀 Guia de Desenvolvimento - JáTá

## 📋 Visão Geral do Projeto

O **JáTá (marcado)** é uma plataforma de agendamento de serviços desenvolvida como um monorepo com Turborepo e pnpm workspaces.

### 🏗️ Arquitetura
- **Monorepo** com **Turborepo** e **pnpm workspaces**
- **apps/** - Aplicações principais
- **packages/** - Bibliotecas compartilhadas

### 🛠️ Stack Tecnológica
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express, Prisma ORM
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT
- **Infraestrutura:** Docker, CI/CD

---

## 📝 Passo a Passo do Desenvolvimento

### Fase 1: Setup Inicial do Projeto

#### 1.1 Configuração do Monorepo
- [ ] Inicializar projeto com Turborepo
- [ ] Configurar pnpm workspaces
- [ ] Estruturar diretórios apps/ e packages/
- [ ] Configurar scripts de build e dev

#### 1.2 Configuração de Ferramentas
- [ ] Setup ESLint e Prettier
- [ ] Configurar TypeScript
- [ ] Setup Husky para git hooks
- [ ] Configurar commitlint

#### 1.3 Configuração de Banco de Dados
- [ ] Setup PostgreSQL com Docker
- [ ] Configurar Prisma ORM
- [ ] Definir schema inicial
- [ ] Configurar migrations

### Fase 2: Desenvolvimento dos Packages

#### 2.1 Package `@jata/config`
- [ ] Configurações compartilhadas de TypeScript
- [ ] Configurações de ESLint e Prettier
- [ ] Configurações de Jest

#### 2.2 Package `@jata/db`
- [ ] Schema Prisma completo
- [ ] Cliente Prisma configurado
- [ ] Migrations iniciais
- [ ] Seeds para dados de teste

#### 2.3 Package `@jata/utils`
- [ ] Funções utilitárias comuns
- [ ] Helpers de validação
- [ ] Funções de formatação
- [ ] Utilitários de data/hora

#### 2.4 Package `@jata/ui`
- [ ] Componentes base (Button, Input, etc.)
- [ ] Componentes de layout
- [ ] Componentes específicos do domínio
- [ ] Sistema de design tokens

### Fase 3: Desenvolvimento da API

#### 3.1 Setup da API (`apps/api`)
- [ ] Configuração do Express
- [ ] Middleware de autenticação JWT
- [ ] Configuração de CORS
- [ ] Setup de logging

#### 3.2 Endpoints de Autenticação
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] POST /auth/refresh
- [ ] POST /auth/logout

#### 3.3 Endpoints de Usuários
- [ ] GET /users/profile
- [ ] PUT /users/profile
- [ ] GET /users (admin)

#### 3.4 Endpoints de Serviços
- [ ] GET /services
- [ ] POST /services
- [ ] PUT /services/:id
- [ ] DELETE /services/:id

#### 3.5 Endpoints de Agendamentos
- [ ] GET /appointments
- [ ] POST /appointments
- [ ] PUT /appointments/:id
- [ ] DELETE /appointments/:id

#### 3.6 Documentação da API
- [ ] Setup Swagger/OpenAPI
- [ ] Documentar todos os endpoints
- [ ] Exemplos de uso

### Fase 4: Desenvolvimento da Aplicação Web

#### 4.1 Setup da Aplicação Web (`apps/web`)
- [ ] Configuração Next.js
- [ ] Setup Tailwind CSS
- [ ] Configuração de rotas
- [ ] Setup de estado global

#### 4.2 Páginas de Autenticação
- [ ] Página de login
- [ ] Página de registro
- [ ] Recuperação de senha
- [ ] Verificação de email

#### 4.3 Páginas Principais
- [ ] Homepage
- [ ] Lista de serviços
- [ ] Detalhes do serviço
- [ ] Agendamento
- [ ] Perfil do usuário

#### 4.4 Funcionalidades
- [ ] Sistema de busca
- [ ] Filtros de serviços
- [ ] Calendário de agendamento
- [ ] Notificações em tempo real

### Fase 5: Desenvolvimento da Aplicação Admin

#### 5.1 Setup da Aplicação Admin (`apps/admin`)
- [ ] Configuração Next.js
- [ ] Layout administrativo
- [ ] Sistema de permissões
- [ ] Dashboard principal

#### 5.2 Funcionalidades Administrativas
- [ ] Gestão de usuários
- [ ] Gestão de serviços
- [ ] Gestão de agendamentos
- [ ] Relatórios e analytics
- [ ] Configurações do sistema

### Fase 6: Integração e Testes

#### 6.1 Testes Unitários
- [ ] Testes para packages
- [ ] Testes para API
- [ ] Testes para aplicações web

#### 6.2 Testes de Integração
- [ ] Testes de fluxo completo
- [ ] Testes de API
- [ ] Testes E2E

#### 6.3 Testes de Performance
- [ ] Testes de carga
- [ ] Otimizações de performance

### Fase 7: Deploy e Infraestrutura

#### 7.1 Configuração de CI/CD
- [ ] GitHub Actions
- [ ] Build automatizado
- [ ] Deploy automatizado
- [ ] Testes automatizados

#### 7.2 Infraestrutura
- [ ] Setup de produção
- [ ] Configuração de domínios
- [ ] SSL/TLS
- [ ] Backup automático

#### 7.3 Monitoramento
- [ ] Setup Sentry
- [ ] UptimeRobot
- [ ] Logs centralizados
- [ ] Métricas de performance

---

## 🎯 Milestones

### Milestone 1: MVP (Mínimo Produto Viável)
- [ ] Autenticação básica
- [ ] CRUD de serviços
- [ ] Agendamento simples
- [ ] Interface básica

### Milestone 2: Beta
- [ ] Todas as funcionalidades core
- [ ] Interface completa
- [ ] Testes básicos
- [ ] Deploy em staging

### Milestone 3: Produção
- [ ] Testes completos
- [ ] Performance otimizada
- [ ] Monitoramento ativo
- [ ] Deploy em produção

---

## 📚 Recursos e Referências

### Documentação
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Ferramentas
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [JWT](https://jwt.io/)

---

## 📐 Padrões de Código e Convenções

**Branches:**
- `feature/nome-funcionalidade`
- `fix/nome-correção`
- `chore/tarefa-geral`

**Commits (Conventional Commits):**
- `feat: nova funcionalidade`
- `fix: correção de bug`
- `chore: alteração de manutenção`
- `docs: atualização de documentação`

---

## ⚙️ Configuração Local com Docker Compose

**Subir PostgreSQL e pgAdmin:**
```bash
docker-compose up -d

*Última atualização: 11/08*
*Versão: 1.0.0* 

### 💡 Prompt para geração de docker-compose (Postgres + pgAdmin)

> Use este prompt sempre que precisar criar ou regenerar o `docker-compose.yml` para o banco de dados e interface de administração.

**Prompt dinâmico:**

> Crie um arquivo `docker-compose.yml` com `version: "3.9"`.  
> Ele deve conter:  
> - Um serviço `db` com a imagem `postgres:{versao_postgres}`, usando as variáveis de ambiente:  
> ```
> POSTGRES_USER={usuario_postgres}
> POSTGRES_PASSWORD={senha_postgres}
> POSTGRES_DB={nome_banco}
> ```
> e mapeando a porta `{porta_postgres_local}:5432`.  
> - Um serviço `pgadmin` com a imagem `dpage/pgadmin4`, usando as variáveis:  
> ```
> PGADMIN_DEFAULT_EMAIL={email_pgadmin}
> PGADMIN_DEFAULT_PASSWORD={senha_pgadmin}
> ```
> e mapeando a porta `{porta_pgadmin_local}:80`.  
>  
> Substitua os valores entre `{}` pelos valores que eu fornecer.  
> Retorne o resultado formatado em YAML pronto para ser salvo como `docker-compose.yml`.
