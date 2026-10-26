// Importa função 'normaLizeTitle'
const{normalizeTitle} = require ('../../src/validation');

describe('Validação de tarefas', () => {

    test('Remove espaços do início e do fim do titulo',() => {
        expect(normalizeTitle(' Teste Unitário ')).toBe('Teste Unitário');
    });

    test('Retorna string vazia se o título for uma número', () =>{
        expect(normalizeTitle(15487)).toBe('');
    });
    //Casos de testes 1: entrando nula
    //Caso de teste 2: entrada indefinida

    // Caso de teste 1: entrada nula
    test('Retorna string vazia se o título for nulo', () => {
      expect(normalizeTitle(null)).toBe('');
      });

     // Caso de teste 2: entrada indefinida
    test('Retorna string vazia se o título for indefinido', () => {
      expect(normalizeTitle(undefined)).toBe('');

});
});

