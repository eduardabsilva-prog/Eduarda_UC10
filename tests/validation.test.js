// Importação de módulos
const { validateLead } = require("../src/validation");

describe("Aplicação de testes unitários na função validateLead()", () => {

    test("Verifica se o nome tem menos de 3 caracteres", () => {
      //Passamos um nome invalido com apenas 1 caractere e guardamos o resultado na constante "result"

        const result = validateLead({ name: "joão", email:"email@email.com" });

        expect(result.errors.length).toBe(0);
        expect(result.valid).toBe(true);

    });

});

    

