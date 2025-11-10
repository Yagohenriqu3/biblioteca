# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

Documentação do Projeto - Sistema de Biblioteca com Acesso via QR Code
1. Resumo do Projeto
O Sistema de Biblioteca com Acesso via QR Code tem como objetivo modernizar e facilitar o gerenciamento de bibliotecas. A solução oferece funcionalidades para alunos e administradores, como catálogo de livros, empréstimos, reservas online, histórico do usuário, controle de acessos via QR Code e relatórios administrativos. O sistema foi desenvolvido inicialmente com foco no frontend.

2. Tecnologias Utilizadas
Frontend: React, Vite, Tailwind CSS, DaisyUI, React Router DOM, React Icons.
Controle de versão: GitHub (deploy via GitHub Pages).
Backend (previsto): Node.js, Express.
Banco de Dados (previsto): MySQL / PostgreSQL.
Integração: API de QR Code.

3. Estrutura de Pastas
O projeto segue a estrutura de pastas organizada conforme boas práticas do React, com divisão em componentes reutilizáveis, páginas e assets. Exemplo simplificado:

src/
 ├── assets/        # imagens e recursos
 ├── components/    # componentes reutilizáveis (NavAdm, Footer, CardCatalog, etc.)
 ├── pages/         # páginas principais (Home, Catalog, Reserva, Login, Painel Admin, etc.)
 ├── index.css      # estilos globais
 ├── App.jsx        # configuração principal de rotas
 └── main.jsx       # ponto de entrada da aplicação

4. Componentes Desenvolvidos
Alguns dos principais componentes criados até o momento:
- BotaoWpp: Botão fixo do WhatsApp para contato direto com a biblioteca.
- Breadcrumbs: Navegação hierárquica entre páginas.
- CardCatalog: Card para exibição de livros no catálogo.
- EstruturaAdm: Tabela administrativa com listagem de livros e ações de edição/exclusão.
- Footer: Rodapé com links principais e direitos autorais.
- NavAdm / NavAdmMobile: Menu de navegação para área administrativa, adaptado para desktop e mobile.
- Navmenu: Menu de navegação principal do site (usuário comum).
- ScrollToTop: Componente para rolagem automática ao topo nas mudanças de rota.
- PainelPerfil: Painel do usuário com abas para histórico, livros em posse e QR Code de acesso.
- PainelAdmin: Painel administrativo para gestão de livros.
- Relatorio: Tela com relatórios de acessos, empréstimos, reservas, além de métricas adicionais.
- CatalogPage: Página com catálogo de livros divididos por categorias.
- HomePage: Página inicial com banner, catálogo e informações de leitura.
- Layout: Estrutura de layout principal (menu, breadcrumbs, rodapé).
- Login / RecuperarSenha: Tela de login e recuperação de senha.
- Reserva: Página detalhada de reserva de livro.
- Sobre: Página 'Sobre' apresentando funcionalidades e objetivos do sistema.

5. Fluxo de Navegação
O sistema possui fluxo de navegação estruturado com React Router DOM, contemplando as seguintes rotas principais:

- '/' → Página inicial (HomePage)
- '/catalogo' → Catálogo de livros
- '/catalogo/reserva' → Detalhes e reserva de livro
- '/sobre' → Página institucional sobre o sistema
- '/login' → Tela de login
- '/login/cadastro' → Cadastro de usuário
- '/login/recuperacaodesenha' → Recuperação de senha
- '/perfil' → Painel administrativo
- '/perfil/user' → Perfil do usuário
- '/perfil/cadastrodelivro' → Cadastro de novos livros
- '/perfil/emprestados' → Listagem de livros emprestados
- '/perfil/usuarios' → Gestão de usuários
- '/perfil/relatorio' → Relatórios do sistema




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


