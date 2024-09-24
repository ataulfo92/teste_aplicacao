
let botao_enviar_input = document.getElementById("botao-enviar").innerHTML

function botao_verificar(){

let nome_input = document.getElementById("input-nome").value;
let email_input = document.getElementById("input-email").value;

if(nome_input != '' && email_input != ''){
/*alert('dados preenchidos com sucesso..:')*/
confirm('dados preenchidos com sucesso..:');

location.reload()
}else{
alert("Os dados precisam ser preenchidos!")    
}
}