# Eduarda

# Questão 1

## a 
< Responda aqui >
A função calcularDesconto calcula o preço final de um produto depois de aplicar um desconto em porcentagem.
o "valor" representa o preço do produto
"percentual" é a porcetagem do desconto do produto o (if) verificar se o valr não estiver correto vai se  gerado  uma mensagem  "Dados invalidos" mas 
Se os dados forem válidos, a função calcula o desconto multiplicando o valor do produto pelo percentual dividido por 100. Por fim, subtrai o desconto do preço original e retorna o valor final do produto. 

## b
C1 - Desconto válido de 10%  E: valor = 100, percentual = 10  ; S: 90
C2 - Desconto de 50%  E: valor = 200, percentual = 50;         S: 100
C3 - Valor invalido  E: valor= 0, percentual = 10; S: Erro: "Dados invalidos"

## c


``` javascript
const { calcularDesconto } = require('../src/operacoes');

/* describe agrupa os testes relacionados*/
describe("Testes da função calcularDesconto", () => {

    // Cenário 1: desconto válido de 10%

    /* cria um teste individual*/
    test("Deve calcular um desconto de 10%", () => {
    
        const resultado = calcularDesconto(100, 10);
      /*  expect verifica o resultado esperado*/
        expect(resultado).toBe(90);
    });

    // Cenário 2: desconto válido de 50%
    test("Deve calcular  um desconto de 50%", () => {
        const resultado = calcularDesconto(200, 50);

        expect(resultado).toBe(100);
    });

    // Cenário 3: valor inválido
    test("Deve lançar erro quando o valor for zero", () => {
        /* expect verifica o resultado esperado*/
        expect(() => calcularDesconto(0, 10))
        /* toThrow verifica se a função vai gerar um erro */
            .toThrow("Dados inválidos");
    });

});

```
## questãoo 2

## a

a -  na "function" eles estão  chamando a função verificarAprovacao para verificar a nota. if para vai verifica a condição para nota não ser menor que 0 e maior que 10, caso a nota for maior ou menor o throw new vai gerar uma mensagem de erro  "nota invalida"  se a nota foi maior que 7 vai ser aprovado e se for menor vai retornar uma mensagem "reprovado"

## b
C1- Nota acima da média       E; 8   S; "Aprovado"
C2 - Nota abixo da média      E; 5   S; "Reprovado"
C3- Nota exatamente igual a 7 E;7    S; "Aprovado"
C4- Nota inválida             E; 11  S; "Nota invalida"

## c 
``` javascript

/*------------- 2 questão -------------*/

// Agrupa os testes da função verificarAprovacao
describe("Testes da função verificarAprovacao", () => {

    // Cenário 1: nota acima da média

  // test cria um teste individual para verificar se a nota 8 aprova o aluno.
    test("Deve retornar Aprovado para nota 8", () => {

     // Executa a função passando a nota 8 e guarda o resultado na variável.
        const resultado = verificarAprovacao(8);

    // Verifica se o resultado obtido é exatamente "Aprovado".
        expect(resultado).toBe("Aprovado");  /* ToBe  Compara o resultado com o valor esperado.*/
    });

    // Cenário 2: nota abaixo da média

     // test cria um teste individual para verificar se a nota 5 reprova ou aprova o aluno.
    test("Deve retornar Reprovado para nota 5", () => {

    // Executa a função passando a nota 5 e guarda o resultado.
        const resultado = verificarAprovacao(5);

    // Verifica se o resultado obtido é exatamente "Aprovado".
        expect(resultado).toBe("Reprovado");
    });

    // Cenário 3: nota exatamente igual a 7

    // test cria um teste individual para verificar se a nota 5 reprova ou aprova o aluno.
    test("Deve retornar Aprovado para nota 7", () => {

     // Executa a função passando a nota 5 e guarda o resultado.
        const resultado = verificarAprovacao(7);

     // Verifica se a nota 7 retorna "Aprovado".
        expect(resultado).toBe("Aprovado");
    });

    // Cenário 4: nota inválida
    test("Deve lançar erro para nota maior que 10", () => {
        expect(() => verificarAprovacao(11))

        // Verifica se a função lança um erro com a mensagem esperada.
            .toThrow("Nota inválida");
    });

```
## d
Testar só uma mota não seria o suficiente, porque precisamos saber se todas a condições da função  estão funcionando corretamente.
testando todas as situações como como notas abaixo da média, notas exatamente iguais ao limite de aprovação e notas inválidas verificamos se a funçãp está sendo apresentando tudo certinho.

## questão 3 

## a

 A função validarCadastro vai validar nome, idade e emaill
 o nome não pode estar vazion, idade deve ser igual ou maior de 18 anos 
 e o email não pode estar vazio e tem que ter caractere @.

## b

``` javascript
/*------------- 3 questão -------------*/

// Agrupa todos os testes relacionados à função validarCadastro
describe("Testes da função validarCadastro", () => {

    // Cenário 1: todos os dados são válidos
    test("Deve aceitar cadastro com todos os dados válidos", () => {

        // Executa a função passando nome, idade e e-mail válidos
        const resultado = validarCadastro(
            "Maria Silva",
            25,
            "maria@email.com"
        );

        // Verifica se o resultado esperado é true
        expect(resultado).toBe(true);

    });

    // Cenário 2: todos os dados são inválidos
    test("Deve rejeitar cadastro com todos os dados inválidos", () => {

        // Executa a função passando nome vazio, idade abaixo de 18 e e-mail sem @
        const resultado = validarCadastro(
            "",
            15,
            "mariaemail.com"
        );

        // Verifica se o resultado esperado é false
        expect(resultado).toBe(false);

    });

    // Cenário 3: o nome está vazio
    test("Deve rejeitar cadastro com nome vazio", () => {

        // Executa a função passando o nome vazio e os outros dados válidos
        const resultado = validarCadastro(
            "",
            25,
            "maria@email.com"
        );

        // Verifica se o cadastro foi considerado inválido
        expect(resultado).toBe(false);

    });

    // Cenário 4: o nome contém apenas espaços
    test("Deve rejeitar cadastro com nome contendo apenas espaços", () => {

        // Executa a função passando espaços no lugar do nome
        const resultado = validarCadastro(
            "   ",
            25,
            "maria@email.com"
        );

        // Verifica se a função identifica o nome como inválido
        expect(resultado).toBe(false);

    });

    // Cenário 5: a idade está vazia
    test("Deve rejeitar cadastro com idade vazia", () => {

        // Executa a função passando a idade vazia e os outros dados válidos
        const resultado = validarCadastro(
            "Maria Silva",
            "",
            "maria@email.com"
        );

        // Verifica se o cadastro foi considerado inválido
        expect(resultado).toBe(false);

    });

    // Cenário 6: a idade está abaixo do limite permitido
    test("Deve rejeitar cadastro com idade abaixo de 18 anos", () => {

        // Executa a função passando uma idade menor que 18
        const resultado = validarCadastro(
            "Maria Silva",
            17,
            "maria@email.com"
        );

        // Verifica se a função rejeita a idade abaixo do limite
        expect(resultado).toBe(false);

    });

    // Cenário 7: a idade está acima do limite permitido
    test("Deve rejeitar cadastro com idade acima de 100 anos", () => {

        // Executa a função passando uma idade maior que 100
        const resultado = validarCadastro(
            "Maria Silva",
            101,
            "maria@email.com"
        );

        // Verifica se a função rejeita a idade acima do limite
        expect(resultado).toBe(false);

    });

    // Cenário 8: o e-mail está vazio
    test("Deve rejeitar cadastro com e-mail vazio", () => {

        // Executa a função passando o e-mail vazio e os outros dados válidos
        const resultado = validarCadastro(
            "Maria Silva",
            25,
            ""
        );

        // Verifica se o cadastro foi considerado inválido
        expect(resultado).toBe(false);

    });

    // Cenário 9: o e-mail não contém o caractere @
    test("Deve rejeitar cadastro com e-mail sem o caractere @", () => {

        // Executa a função passando um e-mail sem o caractere @
        const resultado = validarCadastro(
            "Maria Silva",
            25,
            "mariaemail.com"
        );

        // Verifica se a função identifica o e-mail como inválido
        expect(resultado).toBe(false);

    });

```

## c
Se apenas um dos dados for inválido, a função retornará false, pois todos precisam estar corretos para validar o cadastro. 
Basta uma informação incorreta para que o cadastro seja rejeitado.

## questão 4 

## a 


## b
O caso 3 deve retornar zero porque a função oferece frete grátis para compras com valor igual ou superior a R$ 200,00. Como a compra foi exatamente R$ 200,00, a condição é atendida e o frete não é cobrado.

## questão 5

## a
``` javascript
/*------------- 5 questão -------------*/

// Função para converter Celsius em Fahrenheit
function converterCelsiusParaFahrenheit(celsius) {

    // Verifica se a temperatura informada é um número
    if (typeof celsius !== "number") {

        // Lança um erro caso o valor não seja numérico
        throw new Error("A temperatura deve ser numérica");
    }

    // Realiza a conversão de Celsius para Fahrenheit
    return (celsius * 9 / 5) + 32;
}
```

## b
A entrada "25" deve provocar um erro porque está escrita como texto (string), e não como número. Mesmo representando numericamente o valor 25, a função verifica o tipo de dado utilizando typeof e aceita apenas valores numéricos.


