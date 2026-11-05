//  Importa a função do arquivo de validação
const { validateLead } = require("../src/validation");
//agrupamento de testes da função validateLead()
describe("Aplicação de testes unitários na função validateLead()", () => {

   
     // aqui vamos criar um testes especifico
    test("Verifica nome invalido", () => {

      //Passamos um nome invalido com apenas 1 caractere e guardamos o resultados na constante "result"
      const result = validateLead({name:"J", email: "email@email.com"});
      // verificar se o vetor vai mandar a mensagem esperada para o usúário inserir no mínimo 3 caracteres 
      expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).")

    });

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

});




    

