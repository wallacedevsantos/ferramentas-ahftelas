function gerarCarta() {
  var razaoSocialObra = document.getElementById("razaoSocialObra").value;
  var cnpjObra = document.getElementById("cnpjObra").value;
  var enderecoCobranca = document.getElementById("enderecoCobranca").value;
  var contrato = document.getElementById("contrato").value;
  var nomeObra = document.getElementById("nomeObra").value;
  var enderecoObra = document.getElementById("enderecoObra").value;
  var nf = document.getElementById("nf").value;
  var nfData = document.getElementById("nfData").value;
  var fornecedor = document.getElementById("fornecedor").value;
  var valorNf = document.getElementById("valorNf").value;
  var material = document.getElementById("material").value;

  var texto = document.getElementById("carta-conteudo");

  const data = new Date();
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  texto.innerHTML = texto.innerHTML.replace(
    "{RAZÃOSOCIALOBRA1}",
    razaoSocialObra
  );
  texto.innerHTML = texto.innerHTML.replace(
    "{RAZÃOSOCIALOBRA}",
    razaoSocialObra
  );
  texto.innerHTML = texto.innerHTML.replace("{CNPJDAOBRA}", cnpjObra);
  texto.innerHTML = texto.innerHTML.replace(
    "{ENDEREÇODECOBRANÇA}",
    enderecoCobranca
  );
  texto.innerHTML = texto.innerHTML.replace("{CONTRATO}", contrato);
  texto.innerHTML = texto.innerHTML.replace("{NOMEDAOBRA}", nomeObra);
  texto.innerHTML = texto.innerHTML.replace("{ENDEREÇODAOBRA}", enderecoObra);
  texto.innerHTML = texto.innerHTML.replace("{NF}", nf);
  texto.innerHTML = texto.innerHTML.replace("{DATANF}", nfData);
  texto.innerHTML = texto.innerHTML.replace("{FORNECEDOR}", fornecedor);
  texto.innerHTML = texto.innerHTML.replace("{VALOR}", valorNf);
  texto.innerHTML = texto.innerHTML.replace("{MATERIAL}", material);
  texto.innerHTML = texto.innerHTML.replace("{DATADEHOJE}", dataFormatada);

  var form = document.getElementById("formulario");
  var botao = document.getElementById("botaoGerarCarta");
  var rodape = document.getElementById("rodape");

  rodape.style.display = "none";
  form.style.display = "none";
  botao.style.display = "none";
  texto.style.display = "block";
  document.querySelector("form").reset();
}

function imprimirPDF() {
  var divParaImprimir = document.getElementById("carta-conteudo");
  var botoes = document.getElementById("botoes");

  botoes.style.display = "none";
  window.print(divParaImprimir);
  botoes.style.display = "block";
}

function recarregarPagina() {
  location.reload();
}
