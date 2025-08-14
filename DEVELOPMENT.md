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
- [✅] Inicializar projeto com Turborepo
- [✅] Configurar pnpm workspaces
- [✅] Estruturar diretórios apps/ e packages/
- [ ] Configurar scripts de build e dev

#### 1.2 Configuração de Ferramentas
- [✅] Setup ESLint e Prettier
- [✅] Configurar TypeScript
- [✅] Setup Husky para git hooks
- [✅] Configurar commitlint

#### 1.3 Configuração de Banco de Dados
- [✅] Setup PostgreSQL com Docker
- [✅] Configurar Prisma ORM
- [✅] Definir schema inicial
- [✅] Configurar migrations

### Fase 2: Desenvolvimento dos Packages

#### 2.1 Package `@jata/config`
- [✅] Configurações compartilhadas de TypeScript
- [✅] Configurações de ESLint e Prettier
- [ ] Configurações de Jest

#### 2.2 Package `@jata/db`
- [ ] Schema Prisma completo
- [ ] Cliente Prisma configurado
- [ ] Migrations iniciais
- [ ] Seeds para dados de teste

#### 2.3 Package `@jata/utils`
- [✅] Funções utilitárias comuns
- [✅] Helpers de validação
- [✅] Funções de formatação
- [✅] Utilitários de data/hora

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


```

## **Como o Husky funciona:**

### **1. Git Hooks**
O Git tem "hooks" (ganchos) que são scripts que rodam automaticamente em momentos específicos:

- **pre-commit**: Antes de fazer commit
- **post-commit**: Depois de fazer commit  
- **pre-push**: Antes de fazer push
- **pre-merge-commit**: Antes de fazer merge

### **2. Exemplo Prático**

**Sem Husky:**
```bash
# Você pode fazer commit de qualquer coisa
git add .
git commit -m "feat: nova funcionalidade"
# Mesmo que o código tenha erros de linting!
```

**Com Husky:**
```bash
git add .
git commit -m "feat: nova funcionalidade"
# Husky executa automaticamente:
# 1. pnpm lint (verifica erros de código)
# 2. pnpm test (roda testes)
# 3. pnpm type-check (verifica tipos TypeScript)
# 
# Se algum desses falhar, o commit é CANCELADO!
```

### **3. Configuração típica do Husky**

```json
<code_block_to_apply_changes_from>
```

### **4. Benefícios Reais**

✅ **Impede commits com erros**
✅ **Força testes antes do push**
✅ **Mantém qualidade automática**
✅ **Evita que código quebrado vá para produção**

### **5. Exemplo de uso no dia a dia**

```bash
# Você tenta fazer commit
git commit -m "feat: adiciona botão"

# Husky executa automaticamente:
# ❌ ESLint encontrou 3 erros
# ❌ Commit CANCELADO
# 
# Você corrige os erros e tenta novamente:
git commit -m "feat: adiciona botão"
# ✅ Todos os checks passaram
# ✅ Commit realizado com sucesso
```

**Em resumo:** Husky é como um "guardião" que protege seu repositório de código ruim, executando verificações automáticas antes de cada operação git.

Quer que eu configure o Husky no seu projeto?
```

