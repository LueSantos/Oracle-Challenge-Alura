const inputTexto = document.querySelector('.box-texto');
const mensagem = document.querySelector('.box-msg');

limpar = () => {
  inputTexto.value = '';
  mensagem.value = '';
  mensagem.style.backgroundImage = ''; // box-msg recebendo o conteúdo digitado
};

// função para armazenar o conteúdo do usuário e enviar para box-msg receber
btEncriptar = () => {
  let textoEncriptado = criptografar(inputTexto.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = 'none'; // box-msg recebendo o conteúdo digitado

  //Condição para alertar que nada foi digitado
  if (textoEncriptado.length == 0) {
    alert('Digite um texto para criptografar!');
    limpar();
  }
};

// Função com os valores do inputTexto digitado pelo usuário que serão criptografados
criptografar = (textoCodificado) => {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  //Transforma todo o texto codificado em minúsculo
  textoCodificado = textoCodificado.toLowerCase();

  //Processamento do codígo iteração com todas as cols da matriz
  for (let i = 0; i < matrizCodigo.length; i++) {
    //
    if (textoCodificado.includes(matrizCodigo[i][0])) {
      textoCodificado = textoCodificado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1],
      );
    }
  }

  return textoCodificado;
};

btDescriptar = () => {
  let textoDescriptado = descriptografar(inputTexto.value);
  mensagem.value = textoDescriptado;
  mensagem.style.backgroundImage = 'none'; // box-msg recebendo o conteúdo digitado

  if (textoDescriptado.length == 0) {
    alert('Nenhum texto criptografado!');
  }
};

//funcão para copiar o texto
CopiarTexto = () => {
  let textoCopiado = mensagem;
  textoCopiado.select();
  navigator.clipboard.writeText(textoCopiado.value);

  if (textoCopiado == textoCopiado) {
    alert(' Copiado com sucesso. Cole o texto para descriptografar! ');
  }
  limpar();
};

descriptografar = (textoDescodificado) => {
  let matrizCodigo = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u'],
  ];

  textoDescodificado = textoDescodificado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoDescodificado.includes(matrizCodigo[i][0])) {
      textoDescodificado = textoDescodificado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1],
      );
    }
  }
  return textoDescodificado;
};
