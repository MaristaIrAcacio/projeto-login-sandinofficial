function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       window.location.href = "aula2.html";
       
    }
}
var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
    }
}

//funcao para criacao da lista na tabela 

function criaLista()
    let tabela = document.getElementById('tabela').innerHTML = "<tr><tr>Nome Usuario</th><th>Acoes</th></tr>";

    // laco de repeeticao para colocar nomes na tabela 
    for(let i=0;i <= (dadosLista.length-1);i++)
    tabela += "<tr><td>" + dadosLista(i) + "</td><td><button class='btn btn-sucess' onclikc=''>Editar</
    button><button class='btn btn-danger' onclick=''>Excluir</button></td><tr>u</tr>