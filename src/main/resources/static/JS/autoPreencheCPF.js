document.getElementById('cpf').addEventListener('input', function(e) {
    var cpf = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen

    e.target.value = cpf;
});
