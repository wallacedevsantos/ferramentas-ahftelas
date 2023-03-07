function gerarTexto() {
  var construtora = document.getElementById("construtora").value;
  var contato = document.getElementById("contato").value;
  var nomeObra = document.getElementById("nomeObra").value;
  var sistema = document.getElementById("sistema").value;
  var data = document.getElementById("data").value;
  var obs = document.getElementById("obs").value;

  var texto = document.getElementById("carta-conteudo");

  texto.innerHTML = texto.innerHTML.replace("{CONTATO}", contato);
  texto.innerHTML = texto.innerHTML.replace("{NOMEDAOBRA}", nomeObra);
  texto.innerHTML = texto.innerHTML.replace("{CONSTRUTORA}", construtora);
  texto.innerHTML = texto.innerHTML.replace("{SISTEMA}", sistema);
  texto.innerHTML = texto.innerHTML.replace("{DATA}", data);
  texto.innerHTML = texto.innerHTML.replace("{OBS}", obs);

  var form = document.getElementById("formulario");
  var botao = document.getElementById("botaoGerarTexto");

  form.style.display = "none";
  botao.style.display = "none";
  texto.style.display = "flex";
  document.querySelector("form").reset();
}

function recarregarPagina() {
  location.reload();
}

function CopiarTexto() {
  // Seleciona o conteúdo da tag p
  var conteudo = document.getElementById("TextoGerado").innerText;

  // Copia o conteúdo para a área de transferência
  navigator.clipboard.writeText(conteudo);

  alert("Texto copiado para a área de transferência!");
}
