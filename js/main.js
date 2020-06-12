function botao(){
    //alert("Obrigado");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
}
 
function redirecionar(){
    window.open("http://www.tercalivre.com.br")
    //window.location.href é outra forma de redirecinar, só que ela vai abrir a pagina no lugar da sua
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

/*function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

/*var d = new Date();
alert(d.getDate());



/*var idade = prompt("Qual é a sua idade?");

if(idade >= 18) {
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
}


/*var nome = "Sidecley batista";
alert("Bem vindo " + nome);

var nome = "Sidecley Batista";
var idade = 44
alert(nome + " tem " + idade + " anos" + casa);


var lista = ["maça", "pera"];
lista.push("uva"); // incluir elemento num array
lista.pop() //remove o ultimo elemento do array
//lista.length // mostra o tamanho do array  
//lista.reverse traz os elementos em ordem inversa
//lista.join(" - ") converte em String e coloca um separador diferente a vírgula 
console.log(lista[1]); */

/*dicionario
var fruta = {nome:"maçã" , cor:"vermelha"}
alert(fruta);
console.log(fruta);

var fruta = [{nome:"maçã" , cor:"vermelha"}, {}] // lista de dicionarios
alert(fruta);
console.log(fruta);*/