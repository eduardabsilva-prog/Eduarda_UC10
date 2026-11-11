/*----------- 1 questão ---------------*/


const {
    calcularDesconto,verificarAprovacao, validarCadastro, calcularFrete,  converterCelsiusParaFahrenheit} = require('../src/operacoes');

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

});


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

});

/*------------- 4 questão -------------*/

// Agrupa os testes relacionados à função calcularFrete
describe("Testes da função calcularFrete", () => {

    // Caso 1: compra acima de R$ 200
    test("Deve retornar frete grátis para compra de 250 reais", () => {

        // Executa a função com compra de 250 e distância de 10 km
        const resultado = calcularFrete(250, 10);

        // Verifica se o frete esperado é zero
        expect(resultado).toBe(0);

    });

    // Caso 2: compra abaixo de R$ 200
    test("Deve calcular o frete para compra de 100 reais", () => {

        // Executa a função com compra de 100 e distância de 10 km
        const resultado = calcularFrete(100, 10);

        // Verifica se o frete esperado é 20
        expect(resultado).toBe(20);

    });

    // Caso 3: compra exatamente igual a R$ 200
    test("Deve retornar frete grátis para compra de 200 reais", () => {

        // Executa a função com compra de 200 e distância de 5 km
        const resultado = calcularFrete(200, 5);

        // Verifica se o frete esperado é zero
        expect(resultado).toBe(0);

    });

    // Caso 4: compra com valor zero
    test("Deve calcular o frete para compra de valor zero", () => {

        // Executa a função com compra de zero e distância de 10 km
        const resultado = calcularFrete(0, 10);

        // Verifica se o frete esperado é 20
        expect(resultado).toBe(20);

    });

    // Caso 5: valor da compra negativo
    test("Deve lançar erro quando o valor da compra for negativo", () => {

        // Executa a função com valor de compra negativo
        expect(() => calcularFrete(-50, 10))

            // Verifica se a função lança o erro esperado
            .toThrow("Valores inválidos");

    });

    // Caso 6: distância negativa
    test("Deve lançar erro quando a distância for negativa", () => {

        // Executa a função com distância negativa
        expect(() => calcularFrete(100, -5))

            // Verifica se a função lança o erro esperado
            .toThrow("Valores inválidos");

    });

});

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





});



