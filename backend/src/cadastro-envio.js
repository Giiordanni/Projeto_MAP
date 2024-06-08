document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('phone-number').value;
    const cpf = document.getElementById('cpf').value;
    const birthdate = document.getElementById('birth-date').value;
    const sexo = document.getElementById('gender').value;
    const endereco = document.getElementById('endereco').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        telefone: telefone,
        cpf: cpf,
        birthdate: birthdate,
        sexo: sexo,
        endereco: endereco,
        password: password,
        confirmPassword: confirmPassword
    };

    fetch('http://localhost:5000/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        console.log(data);
    })
    .catch(error => {
        alert('Erro ao cadastrar usuário.');
        console.error('Error:', error);
    });
});