
  
const { validateTaskInput } = require('../../src/validation');

// Agrupa todos os testes relacionados à validação de tarefas
describe('Validação de tarefas', () => {

    // Teste 1: Verifica se aceita um título válido
    test('Aceita um título válido', () => {

        // Chama a função passando um título e uma descrição válidos
        const resultado = validateTaskInput({
            title: 'Estudar para prova',
            description: 'Revisar JavaScript'
        });

        // Verifica se a validação retornou true
        expect(resultado.valid).toBe(true);

        // Verifica se o título retornado está correto
        expect(resultado.data.title).toBe('Estudar para prova');
    });

    // Teste 2: Verifica se remove os espaços do início e do final do título
    test('Remove espaços do início e do final do título', () => {

        // Chama a função passando um título com espaços extras
        const resultado = validateTaskInput({
            title: '  Estudar para prova  '
        });

        // Verifica se os espaços foram removidos corretamente
        expect(resultado.data.title).toBe('Estudar para prova');
    });

    // Teste 3: Verifica se apresenta um erro quando o título está vazio
    test('Gera erro quando o título está vazio', () => {

        // Verifica se a função lança o erro esperado ao receber um título vazio
        expect(() => validateTaskInput({
            title: ''
        })).toThrow('O título da tarefa é obrigatório.');
    });

    // Teste 4: Verifica se apresenta um erro quando o título ultrapassa 120 caracteres
    test('Gera erro quando o título ultrapassa 120 caracteres', () => {

        // Cria um texto com 121 caracteres
        const titulo = 'a'.repeat(121);

        // Verifica se a função lança o erro esperado
        expect(() => validateTaskInput({
            title: titulo
        })).toThrow('O título deve ter no máximo 120 caracteres.');
    });

    // Teste 5: Verifica se aceita uma descrição vazia
    test('Aceita uma descrição vazia', () => {

        // Chama a função informando apenas o título
        const resultado = validateTaskInput({
            title: 'Estudar'
        });

        // Verifica se a descrição retornada é uma string vazia
        expect(resultado.data.description).toBe('');
    });

});


