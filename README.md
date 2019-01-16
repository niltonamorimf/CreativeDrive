# Teste de Análise de Suporte
O teste consiste em uma simulação de atendimento a suporte de uma aplicação de FRONT-END em Angular 7. São cinco questões, estas irão simular problemas encontrados por usuários desta aplicação. As respostas desses chamados devem ser respondidas neste documento abaixo no tópico 'Respostas', e devem conter os seguintes itens*:
 
 - Uma análise inicial, com a finalidade de enriquecer o chamado de suporte. Essa sendo uma análise mais de fluxo de trabalho e não necessariamente técnica;
 - Uma análise técnica, com a finalidade de obter dados mais precisos sobre o erro, podendo indicar o motivo do erro e até indicar uma solução;
 - Uma correção do problema, com a finalidade de corrigir o erro antes de passar para uma equipe de desenvolvimento.
 - Uma mensagem para o usuário que registrou o suporte, explicando o que será feito.

 * A resposta pode ser parcial, mas deve conter pelo menos o primeiro e o ultimo item.

## Pré Requisitos:

 - Um computador com Node.js, NPM e git instalados;
 - Conexão de internet;
 - Navegador Google Chrome;
 - Editor de texto de sua preferência. Como o Sublime, VisualCode, etc;
 - Conta no gitHub.

## Procedimentos:

 - Clonar o repositório encontrado em 'https://github.com/CarlosEduardoFerreiraRamos/support-test-cora';
 - Baixar os pacotes da aplicação com NPM;
 - Subir a aplicação no browser com NPM ou com angular-CLI;
 - Seguir o fluxo descrito descrito nos suportes;
 - Reescreva este arquivo, o README.md, com as respostas;
 - Publique o projeto em seu repositório no gitHub, com o arquivo README.md modificado, e com qualquer alteração que tenha sido feita.

## Questões

  Aba de gerenciamento de usuários
   
   1 - Não é possível desselecionar usuários selecionados:
   - Após selecionar um usuário não tem como retirar a seleção, ele ainda fica marcada em azul mesmo depois de clicar nele;
   
   2 - Ao se clicar em detalhes aciona a seleção de usuário:
   - Se clico no detalhes de um usuário que não está selecionado ele acaba ficando selecionado;
   
   3 - Detalhes do usuário quebrado:
   - Ela abre em branco, sem valor, quebra.
   
  Aba de gerenciamento de produtos:
  
   4 - Produtos com três quotes, a última não valida caso seja validada com valor Zero:
   - Não estou conseguindo mandar a cobrança do produto com sku 'LIB1432', ele não está registrando a quote QA.  
   
   5 - Produto que é desvalidado após ser selecionado ainda é enviado no submit:
   - Selecionei alguns produtos no checkbox do lado do 'select', depois tive que remover o valor da quote de um produto específico e desvalida-lo, mas a contagem de produtos para cobrança ainda estava considerando esse produto.

## Respostas

  Aba de gerenciamento de usuários
 
   1 - Não é possível desselecionar usuários selecionados:
   - Após selecionar um usuário não tem como retirar a seleção, ele ainda fica marcada em azul mesmo depois de clicar nele;

   Resposta:

   Análise inicial: foi realizada uma overview do código para verificar possíveis erros, visto que o cliente conseguia selecionar usuários da lista e não conseguia retirar a seleção, o que indica possível erro de digitação na hora da criação do código. Este erro não é comum, pois é fácil identifica-lo com testes simples.

   Análise Técnica: foi encontrado um erro no código, como esperado. O erro consistia de um array utilizado incorretamente, retirando-o foi resolvido o problema.

   Correção do problema: Foi retirado o array que estava sendo utilizado incorretamente dentro do código.

   Mensagem para o usuário que registrou o suporte: após verificação do problema, o mesmo foi resolvido.

   
   2 - Ao se clicar em detalhes aciona a seleção de usuário:
   - Se clico no detalhes de um usuário que não está selecionado ele acaba ficando selecionado;
   
   Resposta:

   Análise inicial: através da overview do código, buscou-se identificar o problema e criar uma lógica que o eliminasse.

   Análise Técnica: Devido o ícone estar dentro da "linha" clicavel, ao se clicar no ícone, também se clica na "linha" do usuário cadastrado, selecionando-o. Desta forma, criou-se um código para cancelar a seleção do usuário cadastrado ao se clicar no ícone.

   Correção do problema: Foi criado um código que cancela a seleção do usuário cadastrado ao se clicar no ícone "detail".
   
   Mensagem para o usuário que registrou o suporte: após verificação do problema, o mesmo foi resolvido.


   3 - Detalhes do usuário quebrado:
   - Ela abre em branco, sem valor, quebra.

   Resposta:

   Análise inicial: como as informações do usuário não estavam sendo recebidas, procurou-se por problemas no envio e recebimento de parâmetros dentro do código.

   Análise Técnica: este problema é muito comum quando os parâmetros não estão sendo enviados ou recebidos de forma correta, desta forma, procurou-se identificar qual parâmetro não estava de acordo, para que o problema fosse corrigido.

   Correção do problema: um parâmetro não estava sendo enviado, logo não havia retorno das informações dos usuários. Adicionando o parâmetro que faltava, corrigiu-se o problema.
   
   Mensagem para o usuário que registrou o suporte: após verificação do problema, o mesmo foi resolvido.

   
   
  Aba de gerenciamento de produtos:
  
   4 - Produtos com três quotes, a última não valida caso seja validada com valor Zero:
   - Não estou conseguindo mandar a cobrança do produto com sku 'LIB1432', ele não está registrando a quote QA.

   Resposta:

   Análise inicial: buscou-se identificar o porque de, ao se usar o valor Zero, não se validar a terceira quote.

   Análise Técnica: ao se utilizar variáveis numéricas na programação, deve ter bastante atenção na hora da escolha do tipo de variável que deve ser usado. Neste caso, a escolha foi infrutífera, devido não ser possível guardar valor nulo na variável. Este problema é facilmente resolvido escolhendo-se um novo tipo de variável que satisfaça os requisitos.

   Correção do problema: foi alterado o tipo de variável escolhido para que fosse possível utilizar valor nulo.
   
   Mensagem para o usuário que registrou o suporte: após verificação do problema, o mesmo foi resolvido.

   
   5 - Produto que é desvalidado após ser selecionado ainda é enviado no submit:
   - Selecionei alguns produtos no checkbox do lado do 'select', depois tive que remover o valor da quote de um produto específico e desvalida-lo, mas a contagem de produtos para cobrança ainda estava considerando esse produto.

   Resposta:

   Análise inicial: tentou-se interpretar o que estava acontecendo no código ao se realizar a tarefa de desvalidar um produto.

   Análise Técnica: é comum encontrar esse tipo de erro, devido ser um pouco mais complexo de identifica-lo ao longo do desenvolvimento da aplicação, sendo um requisito dependente de outro que pode não estar disponível. Após a identificação do mesmo, pode-se corrigir o problema facilmente, adicionando-se poucas linhas de código.

   Correção do problema: foi adicionada uma condição "if" para que, ao se desvalidar um produto, a seleção seja removida automaticamente, retirando-o dos produtos que devem ser cobrados.
   
   Mensagem para o usuário que registrou o suporte: após verificação do problema, o mesmo foi resolvido.