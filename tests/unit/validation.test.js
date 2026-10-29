
  
   //Ela é responsável por remover os espaços do início e do final
   //de um texto e retornar uma string vazia se não for texto. //
const{normalizeTitle} = require ('../../src/validation');

// Agrupa os testes relacionados à validação de tarefas
describe('Validação de tarefas', () => {

    // Casos de teste para a função validateTasInput

    
  // Teste 1: Remove espaços do título
  test('Remove espaços do início e do final', () => {

      // Entrada: texto com espaços extras
    // Saída esperada: texto sem os espaços extras
    expect(normalizeTitle('  Estudar para prova  '))
      .toBe('Estudar para prova');
  });

  // Teste 2: Entrada que não é texto
  test('Retorna string vazia se a entrada não for texto', () => {

    // Como 123 não é uma string, o resultado esperado é ''
    expect(normalizeTitle(123)).toBe('');
  });

  // Teste 3: Título vazio
  test('Retorna string vazia se o título estiver vazio', () => {
   // A entrada é '' e o resultado esperado também é ''
    expect(normalizeTitle('')).toBe('');
  });

});





