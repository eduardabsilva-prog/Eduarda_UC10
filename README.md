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
  //  Testa se o nome contém apenas espaços em branco
    test("Verifica nome com espaços vazios", () => {

        // Envia um nome contendo somente espaços
        const result = validateLead({
            name: "   ",
            email: "ana@email.com"
        });

        // Verifica se a mensagem de erro foi adicionada ao vetor
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });

```

**Justificativa:**

\[ o teste foi criado para verificar se só foi adicionada   a mensagem com espaços vazios, caso isso aconteça será gerado uma mensagem pedindo para informar um nome com no mínimo de 3 caracteres.\]

---

### Teste 02 – \[Verifica se o cadastro completo é válido\]

- **Funcionalidade testada:** \[ validateLead\]
- **Nome do teste no Jest:** \[Verifica se o cadastro completo é válido\]
- **Objetivo:** \[Verificar se a função aceita um cadastro com todos os dados corretos.\]
- **Tipo de cenário:** \[Positivo\]
- **Entrada utilizada:** \[  email: "joao@email.com",
        phone: "21999999999",
        interest: "Online"\]
- **Resultado esperado:** \[result.valid deve ser true e result.errors deve possuir zero elementos.\]
- **Resultado obtido:** \[Preecher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 test("Verifica se o cadastro completo é válido", () => {
    // vamos verificar se o cadastro completo é valido

     // executa uma função passando dados corretos
     // const cria uma variável para guardar o resultado
    const result = validateLead({
        name: "João Silva",
        email: "joao@email.com",
        phone: "21999999999",
        interest: "Online"
    });

    //  verifica se o resultado é o esperado 
    expect(result.valid).toBe(true); // se o cadastro é válido
    expect(result.errors).toHaveLength(0); // se o vetor de erros está vazio

});

  
```

**Justificativa:**

\[Esse teste verifica o cenário positivo, garantindo que um cadastro com todos os campos preenchidos corretamente seja considerado válido e não apresente mensagens de erro.\]

---
### Teste 03 – \[Cadastro mínimo válido\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica se o cadastro mínimo é válido.\]
- **Objetivo:** \[Verificar se a função aceita um cadastro preenchido apenas com nome e e-mail.\]
- **Entrada utilizada:** \[Nome: "Maria Silva"
E-mail: "maria@email.com"\]
- **Resultado esperado:** \[result.valid deve ser true e result.errors deve possuir zero elementos.\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// vamos verificar se o cadastro mínimo é válido
test("Verifica se o cadastro mínimo é válido", () => {

    //executa a função passando dados corretos
    const result = validateLead({
        name: "Maria Silva",
        email: "maria@email.com"
    });

    //  verifica se o resultado é o esperado 
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);

});


  ```

  ---
### Teste 04 – \[Nome com tipo de dado incorreto\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Deve rejeitar nome que não seja uma string.\]
- **Objetivo:** \[Verificar se a função identifica quando o nome recebe um tipo de dado incorreto.\]
- **Entrada utilizada:** \[  name: 123,
            email: "ana@email.com"\]
- **Resultado esperado:** \[Retornar o erro de nome inválido.\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 // Testa se o nome foi enviado com um tipo diferente de string
    test("Verifica nome com tipo incorreto", () => {

        // Envia o nome como número em vez de texto
        const result = validateLead({
            name: 123,
            email: "ana@email.com"
        });

        // Verifica se o sistema identificou o tipo incorreto
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });

  ```
   ---
### Teste 05 – \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 //  Testa se o e-mail foi enviado sem o símbolo @
    test("Verifica e-mail sem @", () => {

        // Envia um e-mail sem o símbolo @
        // validateLead chama a função responsavel por validar os dados
        const result = validateLead({
            name: "Ana Silva",
            email: "anaemail.com"
        });

        // Verifica se o vetor (result.errors) contém a mensagem de e-mail inválido
        // result.errors armazena as mensagens de erro econtradas 
        expect(result.errors).toContain("Informe um e-mail válido.");
    });


  ```
   ---
### Teste 06– \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 // Testa se o e-mail está incompleto, sem domínio e ponto
    test("Verifica e-mail incompleto", () => {

        // Envia um e-mail sem a extensão do domínio
        const result = validateLead({
            name: "Ana Silva",
            email: "email@email"
        });

        // Verifica se o sistema identificou o e-mail incompleto
        expect(result.errors).toContain("Informe um e-mail válido.");
    });




  ```
   ---
### Teste 07– \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 // Testa se o e-mail está incompleto, sem domínio e ponto
    test("Verifica e-mail incompleto", () => {

        // Envia um e-mail sem a extensão do domínio
        const result = validateLead({
            name: "Ana Silva",
            email: "email@email"
        });

        // Verifica se o sistema identificou o e-mail incompleto
        expect(result.errors).toContain("Informe um e-mail válido.");
    });





  ```

  ---
### Teste 07– \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 //  Testa se o e-mail foi enviado com um tipo diferente de string
    test("Verifica e-mail com tipo incorreto", () => {

        // Envia o e-mail como número em vez de texto
        const result = validateLead({
            name: "Ana Silva",
            email: 12345
        });

        // Verifica se o vetor contém a mensagem de erro do e-mail
        expect(result.errors).toContain("Informe um e-mail válido.");
    });


  ```

   ---
### Teste 08– \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 
    // Testa se o telefone foi enviado como número em vez de texto
    test("Verifica telefone com tipo incorreto", () => {

        // Envia um telefone numérico em vez de uma string
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            phone: 21999999999
        });

        // Verifica se o sistema identificou o tipo incorreto do telefone
        expect(result.errors).toContain("Preencha o telefone corretamente");
    });

  ```

    ---
### Teste 09– \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
 
    // Testa se a modalidade informada não existe na lista permitida
    test("Verifica modalidade inválida", () => {

        // Envia uma modalidade que não está entre as opções permitidas
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            interest: "Híbrido"
        });

        // Verifica se o vetor contém a mensagem de modalidade inválida
        expect(result.errors).toContain("Selecione uma modalidade válida.");
    });



  ```

  ### Teste 10– \[ E-mail sem o caractere @\]

- **Funcionalidade testada:** \[validateLead()\]
- **Nome do teste no Jest:** \[Verifica e-mail sem @\]
- **Objetivo:** \[Verificar se a função identifica e-mails com formato inválido.\]
- **Entrada utilizada:** \["anaemail.com"\]
- **Resultado esperado:** \[Retornar a mensagem "Informe um e-mail válido."\]
- **Resultado obtido:** \[Preencher após executar\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
  // Testa se o sistema diferencia letras maiúsculas e minúsculas
    test("Verifica modalidade com diferenciação de caixa", () => {

        // Envia "online" com letra inicial minúscula
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            interest: "online"
        });

        // Verifica se o sistema identificou a modalidade como inválida
        expect(result.errors).toContain("Selecione uma modalidade válida.");
    });



  ```
> **Importante:** Duplique o bloco de registro acima para documentar todos os testes realizados. Não registre apenas os testes aprovados. Os testes reprovados também devem ser documentados.

---

## 6\. Resumo dos resultados

Apresente um resumo quantitativo de todos os testes executados.

| Indicador | Quantidade |
| --- | ---: |
| Total de testes executados | \[11\] |
| Testes aprovados (Passed) | \[11\] |
| Testes reprovados (Failed) | \[11\] |

**Percentual de aprovação:**

\[Calcule: (11 ÷ 11) × 100\]

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

| \[Nome contendo apenas espaços poderia ser aceito.\] | \[ espaços poderia ser aceito.
Ausência de tratamento adequado dos espaços em branco.\] | \[Utilização do método trim() na validação do nome.\] | \[Resolvido\] |

| \[Nome com tipo de dado incorreto.\] | \[Necessidade de verificar o tipo da informação recebida.\] | \[Verificação com typeof name !== "string".\] | \[Resolvido\] 

| \[Telefone informado como número.\] | \[O campo deveria receber um texto.\] | \[Verificação do tipo de dado com typeof phone.\] | \[Resolvido\] 




---

## 9\. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? sim

2. Quais foram os cenários mais importantes verificados durante os testes?
Foram importantes os cenários que verificaram o preenchimento incorreto dos campos, principalmente nomes inválidos, e-mails incompletos, telefones com tipos de dados incorretos e modalidades não permitidas. Também foi importante testar um cadastro completo e válido.

3. Algum teste identificou uma falha na aplicação? Qual?
Na execução final, nenhum teste apresentou falhas. Todos os cenários testados tiveram os resultados esperados, demonstrando que as validações estavam funcionando corretamente.

4. Quais alterações foram necessárias para corrigir os problemas encontrados?
Após os testes, não foram necessárias novas alterações, pois todos os testes apresentaram os resultados esperados. As validações implementadas foram suficientes para tratar os cenários testados.

5. Existem funcionalidades que ainda precisam ser testadas? Quais?
Sim. Ainda podem ser realizados testes para verificar campos vazios, valores nulos ou indefinidos


---

## 10\. Conclusão

Apresente uma conclusão sobre o processo de testes realizado.

- Os testes contribuíram para identificar possíveis falhas?
- A aplicação apresentou o comportamento esperado nos cenários testados?
- Qual foi a importância dos testes unitários para a qualidade do software desenvolvido?

**Conclusão da equipe:**

\[A realização dos testes unitários foi importante para verificar o funcionamento da função validateLead() e garantir que os dados informados no formulário de cadastro da aplicação Academia Viva fossem validados corretamente.

Durante os testes, foram analisados diferentes cenários, incluindo informações inválidas e um cadastro completo. Os resultados demonstraram que a função apresentou o comportamento esperado nos casos testados.

Concluímos que os testes unitários são importantes para a qualidade do software, pois permitem identificar possíveis erros, verificar o funcionamento das funções e aumentar a confiabilidade da aplicação.\]

---

**Relatório elaborado por:** \[Eduarda\]

**Data da última atualização:** \[05/11/2026\]
