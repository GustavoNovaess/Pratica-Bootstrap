let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
    let txt = document.querySelector("#txtNome");
    //txt.style.fontFamily = 'Impact';
    txt.style.fontSize = '16px';

    if (nome.value.length == 0) {
        txt.style.display = 'none';
    } else if(nome.value.length < 3) {
        txt.style.display = 'block';
        txt.innerHTML = '❌ Nome Inválido';
        txt.style.color = 'red';
        nomeOk = false;
    } else {
        txt.style.display = 'block';
        txt.innerHTML = '✔ Nome Válido'
        txt.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    //txtEmail.style.fontFamily = 'Impact';
    txtEmail.style.fontSize = '16px';

    if (email.value.length == 0) {
        txtEmail.style.display = 'none';
    }else if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        txtEmail.style.display = 'block';
        txtEmail.innerHTML = '❌ Email Inválido';
        txtEmail.innerHTML.fontFamily = 'Impact';
        txtEmail.style.color = 'red';
        emailOk = false;
    } else {
        txtEmail.style.display = 'block';
        txtEmail.innerHTML = '✔ Email Válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    //txtAssunto.style.fontFamily = 'Impact';
    txtAssunto.fontSize = '16px';

    if (assunto.value.length >= 100) {
        txtAssunto.style.padding = '0px';
        txtAssunto.innerHTML = '❌ Limite de 100 caracteres ultrapassado';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
        assuntoOk = false; 
    } else {
        //txtAssunto.innerHTML = '';
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
        return true
    } else {
        alert('Formulário Incorreto, por favor preencha o formulário corretamente.');
        return false;
    }
}