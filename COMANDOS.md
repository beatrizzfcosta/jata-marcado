# 📜 Histórico de Comandos - JáTá (marcado)

Este arquivo documenta **todos os comandos executados** no desenvolvimento do projeto, na ordem em que foram utilizados.

---

## 1️⃣ Criação do Monorepo com Turborepo

```bash
# Criar pasta do projeto
mkdir jata-marcado
cd jata-marcado

# Inicializar package.json
pnpm init 

# Adicionar Turborepo
pnpm add turbo -D

# Criar arquivo pnpm-workspace.yaml
nano pnpm-workspace.yaml

# Conteúdo:
packages:
  - "apps/*"
  - "packages/*"

# Estrutura Inicial das Pastas 
mkdir -p apps/web apps/admin apps/api
mkdir -p packages/ui packages/config packages/db packages/utils

# Criar arquivo docker-compose.yml
nano docker-compose.yml

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

# Subir containers
docker-compose up -d

```
## 2️⃣ Instalação e Configuração do Prisma no package @jata/db

```bash

# Criar package.json inicial
nano package.json 
{
  "name": "@jata/db",
  "version": "0.1.0",
  "private": true,
  "type": "module"
}

# Instalar dependências do workspace
pnpm install

# Adicionar Prisma e Prisma Client
pnpm add prisma @prisma/client --filter @jata/db

# Adicionar scripts do Prisma no package.json
# Editar packages/db/package.json para incluir:
{
  "name": "@jata/db",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "prisma": "prisma",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "@prisma/client": "^6.13.0",
    "prisma": "^6.13.0"
  }
}

# Inicializar Prisma com PostgreSQL (agora funciona)
pnpm --filter @jata/db prisma init --datasource-provider postgresql


# Criar arquivo .env com DATABASE_URL
cd packages/db
echo 'DATABASE_URL="postgresql://postgres:postgres@localhost:5432/jata"' > .env

# Iniciar banco de dados PostgreSQL
docker-compose up -d db

# Gerar cliente Prisma
pnpm --filter @jata/db db:generate
```

### 📋 Comandos Disponíveis do Prisma

Após a configuração, você pode usar:

```bash
# Gerar cliente Prisma
pnpm --filter @jata/db db:generate

# Fazer push do schema para o banco
pnpm --filter @jata/db db:push

# Executar migrações
pnpm --filter @jata/db db:migrate

# Abrir Prisma Studio
pnpm --filter @jata/db db:studio

# Comando direto do Prisma
pnpm --filter @jata/db prisma [comando]
```
