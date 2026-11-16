/* validation.js — validação dos dados
Verifica se o título foi informado, remove espaços desnecessários e impede títulos com mais de 120 caracteres. Evita que dados inválidos sejam enviados para o banco. */

// Se o título for uma string, remove os espaços em branco
// Senão, retorna uma string vazia
function normalizeTitle(title) {
  return typeof title === 'string' ? title.trim() : '';
}

// Validação dos dados da tarefa
function validateTaskInput(input) {
 
  
  // Normaliza o título, removendo espaços extras
  const title = normalizeTitle(input?.title);

  // Verifica se o título está vazio
  if (!title) {
    throw new Error('O título da tarefa é obrigatório.');
  }

  // Verifica se o título ultrapassa 120 caracteres
  if (title.length > 120) {
    throw new Error('O título deve ter no máximo 120 caracteres.');
  }

  // Remove espaços extras da descrição
  const description = typeof input?.description === 'string'
    ? input.description.trim()
    : '';

  // Retorna os dados validados
  return {
    valid: true,
    data: {
      title,
      description
    }
  };
}


// Exporta as duas funções para que elas possam ser usadas em outros arquivos do seu projeto Node.js
module.exports = { normalizeTitle, validateTaskInput };
