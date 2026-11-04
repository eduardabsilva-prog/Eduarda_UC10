// Esta função extrai os campos do formulario
function validateLead({ name, email, phone, interest }) {
  // Criaum vetor que vai acumular os problemas encontrados ao longo da validação 
  const errors = [];

  // Validação do nome: Verifica se o nome não é uma string ou se tem menos de 3 caracteristica
  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Informe seu nome (mínimo de 3 caracteres).");
  }


 // Validação de e-maill: Verifica se o e-maill não é uma string ou se ele não passa
 // no teste de validação
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;     // Validação de e-maill

  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }
  // Validação de telefone: Verifica se o telefone foi prenchido no formúlario e se o tipo
  // da variável "phone" é diferente de string
  if (phone && typeof phone !== "string") {
    errors.push("Preencha o telefone corretamente");
  }

  // Cria um vetor com as opções de modaliudade do curso
  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];
  // Validação de modalidade de cursos: Verifica se a modalidade de interesse foi prenchida e
  // se a opção enviada não está na lista de permitindo
  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }

  return { valid: errors.length === 0, errors };
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;
  const allowed = ["Online", "Presencial"];
  return allowed.includes(modality) ? modality : null;
}

module.exports = { validateLead, normalizeCourseFilter };
