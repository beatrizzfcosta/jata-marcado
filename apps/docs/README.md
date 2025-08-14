# 📚 Documentação do Projeto JáTá

Esta pasta contém a documentação técnica do projeto JáTá.

## 📁 Arquivos

### `database.dbml`
Schema do banco de dados em formato DBML (Database Markup Language).

**O que é DBML?**
- DBML é uma linguagem de marcação para definir esquemas de banco de dados
- Pode ser visualizado em ferramentas como [dbdiagram.io](https://dbdiagram.io)
- Facilita a documentação e visualização da estrutura do banco

**Como usar:**
1. Acesse [dbdiagram.io](https://dbdiagram.io)
2. Cole o conteúdo do arquivo `database.dbml`
3. Visualize o diagrama ER do banco de dados

## 🗄️ Estrutura do Banco de Dados

### Tabelas Principais

#### `users`
- Armazena informações dos usuários do sistema
- Suporta diferentes roles: MASTER, ADMIN, COLLABORATOR

#### `companies`
- Representa as empresas/clientes do sistema
- Cada empresa pode ter suas próprias cores e logo

#### `company_users`
- Tabela de relacionamento entre usuários e empresas
- Define permissões de administração por empresa

#### `activities`
- Serviços/atividades oferecidos pelas empresas
- Inclui duração e preço

#### `bookings`
- Agendamentos realizados pelos clientes
- Armazena dados do cliente e horário do agendamento

#### `availability`
- Controle de disponibilidade dos profissionais
- Define quais dias cada usuário está disponível

## 🔄 Sincronização com Prisma

O schema DBML está sincronizado com o arquivo `packages/db/prisma/schema.prisma`.

**Para atualizar o banco após mudanças no DBML:**
1. Atualize o arquivo `database.dbml`
2. Converta para Prisma (se necessário)
3. Execute: `pnpm --filter @jata/db db:push`

## 📊 Visualização

Para visualizar o diagrama ER:
1. Abra [dbdiagram.io](https://dbdiagram.io)
2. Cole o conteúdo de `database.dbml`
3. O diagrama será gerado automaticamente

---

*Última atualização: 14/08* 