# Cypress Suite de Testes para Fluxo de Compra

## Descrição
Este projeto é uma suíte de testes end-to-end (E2E) para o site da Ebac Shop (http://lojaebac.ebaconline.art.br/). A suíte de testes cobre o fluxo de login e o fluxo completo de compra, incluindo a seleção de produtos, o carrinho, o checkout e a confirmação do pedido.

## Principais Recursos
- Testes de login usando diferentes abordagens (por exemplo, usando um arquivo de perfil)
- Testes para o fluxo completo de compra, incluindo:
  - Acessar a página de produtos
  - Selecionar produtos (usando um arquivo de produtos)
  - Acessar a página do carrinho
  - Prosseguir para o checkout
  - Aceitar os termos e condições
  - Completar o pedido
  - Verificar a página de confirmação do pedido

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Node.js](https://nodejs.org/) - Ambiente de tempo de execução JavaScript

## Instalação
1. Clone o repositório:
   ```
   git clone https://github.com/heyliana/ebac-shop-e2e-tests.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd ebac-shop-e2e-tests
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Utilização
1. Execute a suíte de testes completa:
   ```
   npm run cy:run
   ```
2. Abra o executor de testes do Cypress:
   ```
   npm run cy:open
   ```
   Isso abrirá o executor de testes do Cypress, onde você poderá executar testes individuais ou a suíte completa.

## Estrutura dos Testes
A suíte de testes é organizada da seguinte forma:

- `login.cy.js`: Contém testes para a funcionalidade de login, usando diferentes abordagens (por exemplo, usando um arquivo de perfil).
- `fluxo-produtos.cy.js`: Contém testes para o fluxo completo de compra, incluindo:
  - Acessar a página de produtos
  - Selecionar produtos (usando um arquivo de produtos)
  - Acessar a página do carrinho
  - Prosseguir para o checkout
  - Aceitar os termos e condições
  - Completar o pedido
  - Verificar a página de confirmação do pedido

Os testes são estruturados usando a abordagem BDD (Behavior-Driven Development) do Cypress, com descrições claras e comentários para explicar o fluxo.

## Fixtures
O projeto usa os seguintes fixtures:

- `profile.json`: Contém credenciais de login para teste.
- `products.json`: Contém informações sobre os produtos usados nos testes do fluxo de compra.

## Contribuição
Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.