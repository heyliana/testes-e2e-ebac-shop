# Cypress Suite de Testes para Fluxo de Compra

Este projeto tem como objetivo validar o fluxo principal de login, seleção de produtos e finalização de compra no site da EBAC Shop

## 💡 Sobre o Projeto
Este projeto é uma suíte de testes end-to-end (E2E) para o site da Ebac Shop. A suíte de testes com fluxo completo de compra, incluindo a seleção de produtos, o carrinho, o checkout e a confirmação do pedido.

## 🛠️ Tecnologias Utilizadas
- Cypress (v13.14.2) - Framework de testes E2E
- Node.js - Ambiente de execução
- VSCode - Editor de código

## 📁 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js       # Testes relacionados ao login
│   │   └── produtos-fluxos.cy.js  # Fluxo completo de pedidos e compras
│   ├── integration/
│   │   └── fluxo-pedidos.specs.js # Alternativa ao produtos-fluxos.cy.js
│   ├── fixtures/
│   │   ├── perfil.json        # Dados de perfil para login
│   │   └── products.json      # Dados de produtos
│   ├── support/
│       └── page_objects/
│           └── product.dados.js  # Módulos para interações com produtos
└── package.json
```	

## 📋 Suites de Testes

### Login || Todos com o mesmo resultado de Sucesso
- Login com comandos customizado
- Login usando fixtures
- Login sem otimização

### Fluxo de Pedidos - Compra
- Acesso à página de produtos
- Seleção de produtos  
- Adição de produtos ao carrinho
- Processo de checkout
- Aceitação de termos e condições
- Finalização do pedido
- Verificação de confirmação do pedido


## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute os testes:
```bash
npm run cy:run    # Executa em modo headless
```

## 📝 Notas Importantes

- Alguns testes utilizam dados fixos armazenados em arquivos JSON na pasta fixtures
- Testes podem ser executados via interface do Cypress ou linha de comando

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto. Toda contribuição é bem-vinda!