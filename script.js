const inputTexto = document.querySelector('.box-texto');
const mensagem = document.querySelector('.box-msg');

// função para armazenar o conteúdo do usuário e enviar para box-msg receber
btEncriptar = () => {
  let textoEcriptado = criptografar(inputTexto.value);
  mensagem.value = textoEcriptado; // box-msg recebendo o conteúdo digitado
  mensagem.style.backgroundImage = "none";


};

// FUnção com os valores do inputTexto digitado pelo usuário que serão subistituidos pelo criptografia
criptografar = (textoCodificado) => {
  let matrizCodigo = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  //Colocando todo o texto em minúsculo
  textoCodificado = textoCodificado.toLowerCase();

  //Iteração com todas as cols da matriz
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoCodificado.includes(matrizCodigo[i][0])) {
      textoCodificado = textoCodificado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1],
      );
    }
  }
  return textoCodificado;
};
 