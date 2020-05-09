var timeout = null;
function jogoInciado() 
{
	var url= window.location.search;
	var nivel_jogos = url.replace("?", "");
	var tempoSegundos;
	if(nivel_jogos ==1) 
	{
		tempoSegundos = 120.0;
	}
	else if(nivel_jogos == 2) 
	{
		tempoSegundos = 60.0;
	}
	else 
	{
		tempoSegundos = 30.0;
	}
	document.getElementById('Cronometro').innerHTML = tempoSegundos;
	//alert(tempoSegundos);
	var qtdBaloes = 80;

	document.getElementById('quantidadeBaloes').innerHTML = qtdBaloes;
	document.getElementById('quantidadeBaloesEstourados').innerHTML = 0;
	criarBaloes(qtdBaloes);
	CronometroFuncao(tempoSegundos + 1);
}
function CronometroFuncao(segundos) 
{
	segundos--;
	if(segundos == -1) 
	{
		gamerOuver();
		clearTimeout(timeout);//Para a função
		window.location.href="index.html";
		return false;
	}
	document.getElementById('Cronometro').innerHTML = segundos;
	timeout = setTimeout("CronometroFuncao("+segundos+")",1000)
}
function gamerOuver() 
{
	alert('Você é burro e não conseguiu estoura os balões a tempo');
}
function criarBaloes(qtd) 
{
	for (var i = 0; i < qtd; i++) 
	{
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = "10px";
		balao.id = "balao" + i; 
		balao.onclick = function() {estourar(this);}
		document.getElementById('cenario').appendChild(balao);
	}
}
function estourar(e) 
{
	var idBalao = e.id;

	var audio = new Audio('explode.mp3');
audio.addEventListener('canplaythrough', function() {
  audio.play();
});

	document.getElementById(idBalao).setAttribute("onclick","");
	document.getElementById(idBalao).src = "imagens/balao_azul_pequeno_estourado.png";
	acaoEstourar();
}

function acaoEstourar() 
{

	var balaoInteiro = document.getElementById('quantidadeBaloes').innerHTML;
	var balaoEstourado = document.getElementById('quantidadeBaloesEstourados').innerHTML;
	balaoInteiro = parseInt(balaoInteiro);
	balaoEstourado = parseInt(balaoEstourado);
	
	balaoInteiro--;
	balaoEstourado++;
	if(balaoInteiro < 1) 
	{
		alert('Parabéns maldito você ganhou');
		clearTimeout(timeout);//Para a função
		window.location.href="index.html";
		return true;
	}
	
	document.getElementById('quantidadeBaloes').innerHTML = balaoInteiro;
	document.getElementById('quantidadeBaloesEstourados').innerHTML = balaoEstourado;
}
