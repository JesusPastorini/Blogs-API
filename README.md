# 🚀 Projeto: API de Blogs

## ℹ️ Sobre o Projeto

O projeto API de Blogs consiste no desenvolvimento de uma API RESTful em Node.js, utilizando o framework Express.js e o ORM Sequelize, para criar, ler, atualizar e deletar (CRUD) posts de um blog. Além disso, a API gerencia usuários e categorias para os posts. A aplicação segue os princípios do REST e é conectada a um banco de dados MySQL.

## 📸 Tabela de relacionamento

![apiblogs](src/der.png)

## 🛠️ Tecnologias e Habilidades

- **Linguagens Utilizadas:** JavaScript (Node.js)
- **Framework:** Express.js
- **ORM:** Sequelize
- **Banco de Dados:** MySQL
- **Testes:** Jest
- **Autenticação:** JWT (JSON Web Tokens)
- **Padrões de Projeto:** MVC (Model-View-Controller)
- **Validação de Dados:** Middleware do Express.js
- **Persistência de Dados:** Interfação com banco de dados relacional usando Sequelize
- **Segurança:** Criptografia de senha

## 📋 Funcionalidades Implementadas

### 01 - Criação de Migrations

- Desenvolvimento de migrations para criar as tabelas `users`, `categories`, `blog_posts` e `posts_categories` no banco de dados MySQL.
- As migrations respeitam o diagrama de Entidade-Relacionamento (DER) e o formato das entidades.

### 02 - Modelagem e CRUD de Usuários

- Criação do modelo `User` para representar os usuários do sistema, com as propriedades corretas definidas.
- Implementação dos endpoints para autenticação e cadastro de novos usuários.
- Desenvolvimento dos endpoints para buscar todos os usuários e buscar um usuário específico por ID.

### 03 - Autenticação de Usuários

- Implementação do endpoint POST /login para autenticar usuários utilizando JWT (JSON Web Tokens).
- Os usuários devem enviar um email e senha válidos para receber um token de autenticação.

### 04 - Modelagem e CRUD de Categorias

- Criação do modelo `Category` para representar as categorias dos posts.
- Implementação dos endpoints para criar novas categorias e buscar todas as categorias existentes.

### 05 - Modelagem e CRUD de Posts

- Criação do modelo `BlogPost` para representar os posts do blog, com as propriedades e associações corretas definidas.
- Desenvolvimento dos endpoints para criar novos posts, buscar todos os posts e buscar um post específico por ID.

### 06 - Associação entre Posts e Categorias

- Criação do modelo `PostCategory` para representar a associação entre posts e categorias.
- Implementação dos endpoints para adicionar categorias a um post durante a criação e buscar todas as categorias de um post específico.

## ℹ️ Habilidades Demonstradas

- Utilização do framework Express.js para desenvolvimento de APIs RESTful.
- Integração com banco de dados relacional MySQL através do ORM Sequelize.
- Implementação de autenticação de usuários com JWT.
- Desenvolvimento de CRUD para múltiplas entidades (Usuários, Categorias e Posts).
- Utilização de testes automatizados com Jest para garantir a funcionalidade dos endpoints.
