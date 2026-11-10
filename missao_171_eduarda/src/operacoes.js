/*-------------- 1 questão --------------------*/

function calcularDesconto(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const desconto = valor * (percentual / 100);
    return valor - desconto;
}

/*----------------- 2 questão ---------------*/

function verificarAprovacao(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }

      if (nota >= 7) {
        return "Aprovado";
    }
    return "Reprovado";
}

/*------------ 3 questão ----------------*/

function validarCadastro(nome, idade, email) {
    if (!nome || nome.trim() === "") {
        return false;
    }
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }
    if (!email || !email.includes("@")) {
        return false;
    }
    return true;
}

/*---------------- 4 questão --------------*/

function validarCadastro(nome, idade, email) {
    if (!nome || nome.trim() === "") {
        return false;
    }
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }
    if (!email || !email.includes("@")) {
        return false;
    }
    return true;
}

/*----------------- 5 questão -------------------*/

function converterCelsiusParaFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        throw new Error("A temperatura deve ser numérica");
    }
    return (celsius * 9 / 5) + 32;
}

/*--------------------- 6 questão -----------------*/

function calcularTotal(quantidade, precoUnitario) {
    if (quantidade < 0 || precoUnitario < 0) {
        throw new Error("Valores inválidos");
    }
    return quantidade * precoUnitario;
}

/*--------------------- 7 questão ---------------------*/

function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
    return true;
}

