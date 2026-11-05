# RELATÓRIO DE TESTES DE SOFTWARE

## 1\. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| **Nome do projeto:** | \[Academia Viva\] |
| **Resumo do projeto:** | \[
Aplicação que possui um formulário de cadastro de usuários, com validação de nome, e-mail, telefone e modalidade de interesse.\] |
| **Nome do testador:** | \[Eduareda Borges da Silva\] |
| **Data dos testes:** |[ \05/11/2026\] |
| **Tecnologias utilizadas:** | \[ JavaScript, Node.js, NPM e Jest\] |

---

## 2\. Objetivo dos testes

Descreva qual foi o objetivo da realização dos testes na aplicação.


- Qual funcionalidade foi testada?
- O que os testes pretendiam verificar?
- Quais possíveis erros ou falhas deveriam ser identificados?

**Resposta:**

\[O objetivo dos testes foi verificar o funcionamento da função validateLead(), responsável por validar os dados informados no formulário de cadastro da aplicação Academia Viva.

Os testes pretendiam verificar se os campos de nome, e-mail, telefone e modalidade de interesse estavam sendo preenchidos corretamente. Também buscavam identificar possíveis erros, como nomes com menos de três caracteres, campos contendo apenas espaços, e-mails inválidos, telefones com tipos de dados incorretos e modalidades não permitidas.

Dessa forma, os testes tiveram como finalidade garantir que a função aceitasse cadastros válidos e identificasse corretamente os dados inválidos, retornando as mensagens de erro esperadas. \]

---

## 3\. Ambiente de testes

Informe as ferramentas e tecnologias utilizadas para executar os testes.

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | \[ECMAScript\] |
| Node.js | \[Consultar com node -v] |
| Jest | \[Consultar com npx jest --version\] |
| NPM | \[Consultar com npm -v\] |
| Outras | \[Visual Studio Code\] |

**Comando utilizado preparar o ambiente:**

``` bash
[npm install --save-dev jest]
```

**Comando utilizado executar o sistema (servidor):**

``` bash
[Não se aplica aos testes da função de validação isolada.]
```

**Comando utilizado para executar os testes:**

``` bash
[npm test]
```

---

## 4\. Funcionalidades testadas

Liste as funções, métodos ou componentes da aplicação que foram submetidos aos testes.

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | \[validateLead()\] | \[src/validation.js\] | \[Verificar a validação dos campos de nome, e-mail, telefone e modalidade de interesse.\] 

---

## 5\. Registro detalhado dos testes realizados

Registre individualmente TODOS os testes implementados.

Para cada teste, preencha as informações abaixo.

### Teste 01 – \[Nome contendo apenas espaços\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Deve rejeitar nome contendo apenas espaços.\]
- **Objetivo:** \[Verificar se espaços em branco são tratados como nome inválido.\]
- **Entrada utilizada:** \[name: " "\]
- **Resultado esperado:** \[Retornar o erro de nome inválido.\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```

**Justificativa:**

\[Explique por que o teste foi criado e o que ele permite verificar.\]

---

### Teste 02 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```

**Justificativa:**

\[Explique por que o teste foi criado e o que ele permite verificar.\]

---

> **Importante:** Duplique o bloco de registro acima para documentar todos os testes realizados. Não registre apenas os testes aprovados. Os testes reprovados também devem ser documentados.

---

## 6\. Resumo dos resultados

Apresente um resumo quantitativo de todos os testes executados.

| Indicador | Quantidade |
| --- | ---: |
| Total de testes executados | \[Número\] |
| Testes aprovados (Passed) | \[Número\] |
| Testes reprovados (Failed) | \[Número\] |

**Percentual de aprovação:**

\[Calcule: (Testes aprovados ÷ Total de testes executados) × 100\]

---

## 7\. Evidências da execução dos testes

Insira capturas de tela (prints) que comprovem a execução dos testes no ambiente de desenvolvimento.
![alt text](image.png)

Inclua evidências que mostrem:

- Execução dos testes no Jest.
- Quantidade de testes aprovados e reprovados.
- Mensagens de erro, quando houver.
- Correções realizadas após a identificação de falhas, se aplicável.

---

## 8\. Problemas identificados e correções realizadas

Registre os problemas encontrados durante a execução dos testes e as soluções implementadas.

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido/Pendente\] |
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido/Pendente\] 
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido/Pendente\] 

Caso nenhum problema tenha sido identificado, explique.

**Resposta:**

\[Escreva aqui\]

---

## 9\. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? Justifique.
2. Quais foram os cenários mais importantes verificados durante os testes?
3. Algum teste identificou uma falha na aplicação? Qual?
4. Quais alterações foram necessárias para corrigir os problemas encontrados?
5. Existem funcionalidades que ainda precisam ser testadas? Quais?

**Respostas:**

\[Escreva aqui\]

---

## 10\. Conclusão

Apresente uma conclusão sobre o processo de testes realizado.

- Os testes contribuíram para identificar possíveis falhas?
- A aplicação apresentou o comportamento esperado nos cenários testados?
- Qual foi a importância dos testes unitários para a qualidade do software desenvolvido?

**Conclusão da equipe:**

\[Escreva aqui\]

---

**Relatório elaborado por:** \[Nome dos integrantes\]

**Data da última atualização:** \[DD/MM/AAAA\]
