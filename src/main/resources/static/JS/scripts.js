// Função para buscar os dados endpoint
async function carregarUsuarios() {
    const token = localStorage.getItem('token'); // Recupera o token do local storage

    try {
        const response = await fetch('/usuarios', {
            headers: {
                'Authorization': `Bearer ${token}` // Inclui o token no cabeçalho de autorização
            }
        });
        const usuarios = await response.json();
        renderizarUsuarios(usuarios);
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
    }
}


// Função para renderizar os usuários na tabela
function renderizarUsuarios(usuarios) {
    const usuariosBody = document.getElementById('usuariosBody');
    usuariosBody.innerHTML = ''; 

    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.status}</td>
            <td>
                <button onclick="abrirAlterarDialog(${usuario.id})">Alterar</button>
                <button onclick="confirmarAlterarStatusUsuario(${usuario.id})">${usuario.status === 'Ativo' ? 'Desabilitar' : 'Habilitar'}</button>
            </td>
        `;
        usuariosBody.appendChild(tr);
    });
}

//abrir o diálogo de alteração do usuário
function abrirAlterarDialog(usuarioId) {
    const modal = document.getElementById('dialogAlterar');
    const usuario = usuarios.find(u => u.id === usuarioId);
    const novoValorInput = document.getElementById('novoValor');

    // Preencher os valores iniciais do diálogo com os dados do usuário
    novoValorInput.value = usuario.nome; 

    modal.style.display = 'block';
    modal.dataset.usuarioId = usuarioId; 
}

// Função para fechar o diálogo modal
function fecharDialog() {
    const modal = document.getElementById('dialogAlterar');
    modal.style.display = 'none';
}

// Função para confirmar a alteração do usuário
function confirmarAlteracao() {
    const modal = document.getElementById('dialogAlterar');
    const campoSelect = document.getElementById('campo');
    const novoValorInput = document.getElementById('novoValor');
    const usuarioId = parseInt(modal.dataset.usuarioId); // Pegar o ID do usuário 
    const usuario = usuarios.find(u => u.id === usuarioId);

    // Alterar o valor do campo selecionado
    const campoSelecionado = campoSelect.value;
    const novoValor = novoValorInput.value;
    usuario[campoSelecionado] = novoValor;

    renderizarUsuarios();
    modal.style.display = 'none';
}

// Função para confirmar alteração de status do usuário
function confirmarAlterarStatusUsuario(usuarioId) {
    const usuario = usuarios.find(u => u.id === usuarioId);
    if (usuario.status === 'Ativo') {
        const confirmacao = window.confirm(`Tem certeza que deseja desabilitar o usuário ${usuario.nome}?`);
        if (confirmacao) {
            usuario.status = 'Inativo';
            renderizarUsuarios(); 
        }
    } else {
        const confirmacao = window.confirm(`Tem certeza que deseja habilitar o usuário ${usuario.nome}?`);
        if (confirmacao) {
            usuario.status = 'Ativo';
            renderizarUsuarios(); 
        }
    }
}


carregarUsuarios();
