// Importa função 'normaLizeTitle'
const{normalizeTitle} = require ('../../src/validation');

describe('Validação de tarefas', () => {

    test('Retorna string vazia se o título for indefinido', () => {
  expect(normalizeTitle(undefined)).toBe('');
});
    
    // Casos de teste para a função val idateTasInput

    
  // Teste 1: Remove espaços do título
  test('Remove espaços do início e do final', () => {
    expect(normalizeTitle('  Estudar para prova  '))
      .toBe('Estudar para prova');
  });

  // Teste 2: Entrada que não é texto
  test('Retorna string vazia se a entrada não for texto', () => {
    expect(normalizeTitle(123)).toBe('');
  });

  // Teste 3: Título vazio
  test('Retorna string vazia se o título estiver vazio', () => {
    expect(normalizeTitle('')).toBe('');
  });

});





