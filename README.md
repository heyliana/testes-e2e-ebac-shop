# Testes End to End - Ebac Shop
### Exercício para os alunos de Qualidade de software da EBAC 

Ebac shop: http://lojaebac.ebaconline.art.br/

### Sobre o Projeto
  Um teste automizado utilizando o cypress, com o cenario de um usuário já cadastrado na plataforma acessando o sua conta e adicionando itens ao carrinho de compras, e acessando seu carrinho para concluir seu pedido de compra.

### Estratégia
feito tudo dentro de um unico cenario desde o login á finalização da compra, utilizando a massa de dados no fixture e support.
todo o cenario tem comentarios para indentificação de passo a passo, mas como foi feito de forma linear está bem intuitivo ao qual comando faz qual ação.


ESTE PROJETO FOI CLONADO DA PÁGINA DA EBAC, OS ARQUIVOS ALTERADOS FORÃO:
 . exercicio-e2e // que está dentro de integration
 . README
 E ARQUIVOS CRIADOS:
 . products // na pasta de fixtures
 . product.dados // na pasta page_objets dentro de support