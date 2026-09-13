let btn1 = document.getElementById("btn1")
let morep = document.getElementById("morep")

const espera = 6000
let title = document.getElementById("title")
let redirectlist = [
    "https://youtu.be/CIF-r7F2clc?si=49zQvXLW2Smv11wH", //nau do canal
    "https://youtu.be/LgRqYh7Aivg?si=QMzK2wNcwB8gP5wL", //aluno do dante
    "https://youtu.be/ft17V2o96_Q?si=AUqV10F9yNPTCUrM", //debate 2022
    "https://youtu.be/7EjIdjKNRls?t=75&si=TdzYu8hoFWt_IxRX", //sinonimos
    "gato.mp4", //gato.mp4 
    "https://youtu.be/bMN81g4VkpM?t=49&si=nz3X2BWfJx96E9pT", //alanzoka e zelda
"https://youtu.be/zN1JsB4kg5Q?si=DabqLxDA8UiRT4mZ", //abroba com leite
    "https://youtu.be/H9pbohMqmwU?t=19&si=i3rpXHEY7DGTWk-2" //robocop gay
]

let redirecttext = [
    "Baixar Minecraft APK sem vírus",
    "Baixe GTA VI GRÁTIS",
    "Assistir A Volta dos Que Não Foram 2",
    "CLIQUE AQUI E GANHE R$ 1.000",
    "Seu dispositivo está com 67 vírus! Clique para eliminá-los",
    "VOCÊ FOI SELECIONADO! Resgate seu prêmio agora",
    "URGENTE: sua conta será bloqueada em 10 minutos",
    "Parabéns! Você ganhou um iPhone 17",
    "Última chance: clique aqui antes que expire",
    "Seu celular está lento? CLIQUE AQUI PARA CORRIGIR",
    "ATENÇÃO: foi detectada uma ameaça no seu dispositivo",
    "Você é o visitante número 1. GANHE SEU PRÊMIO",
    "Baixe agora o aplicativo que deixa seu celular 10x mais rápido",
    "Você tem um reembolso de R$ 2.847 disponível",
    "Seu pacote está aguardando confirmação. Clique aqui",
    "Sua conta foi selecionada para receber um benefício",
    "DESCUBRA QUEM VISITOU SEU PERFIL",
    "Ganhe Robux grátis! Clique para resgatar",
    "V-Bucks GRÁTIS! Resgate antes que acabe",
    "Netflix grátis por 1 ano — clique para ativar",
    "ATUALIZAÇÃO OBRIGATÓRIA: clique para continuar",
    "Seu armazenamento está 99% cheio! Resolva agora",
    "Detectamos atividades suspeitas na sua conta",
    "Você ganhou uma chave exclusiva! Clique para abrir",
    "OFERTA RELÂMPAGO: 90% de desconto somente agora",
    "Seu antivírus encontrou 12 ameaças!",
    "Clique aqui para descobrir seu resultado",
    "Você foi escolhido entre 10.000 pessoas",
    "Seu cadastro está incompleto. Atualize agora",
    "ALERTA DE SEGURANÇA: ação necessária imediatamente",
    "Baixe o GTA VI Mobile oficial",
    "Minecraft Premium grátis por tempo limitado",
    "Ganhe dinheiro respondendo 3 perguntas",
    "Você tem uma mensagem secreta esperando",
    "Clique aqui e descubra o que aconteceu",
    "Seu navegador precisa ser atualizado AGORA",
    "Parabéns! Você desbloqueou uma recompensa secreta",
    "Seu dispositivo foi comprometido! Verifique agora",
    "Resgate seus R$ 500 antes que desapareçam",
    "VOCÊ NÃO VAI ACREDITAR NO QUE ACONTECEU"
];


let commentlist = [
  ["@lucas_oliveira", "COMO ASSIM O ACRE COMPROU O BRASIL????? EU SAÍ POR 10 MINUTOS E A REALIDADE DESANDOU"],
  ["@mariana_s", "MEU DEUS 😳 O BRASIL FOI VENDIDO E EU NÃO FUI CONSULTADA???"],
  ["@joaovitor", "Peraí... PRESIDENTE DO ACRE????? DESDE QUANDO O ACRE TEM PRESIDENTE???"],
  ["@carolzinha", "EU TÔ EM CHOQUE COM OS SACOS DE CASTANHA KKKKKKK ISSO NÃO PODE SER REAL"],
  ["@rafael_m", "GENTE, ALGUÉM ME EXPLICA COMO UM ESTADO COMPROU UM PAÍS INTEIRO???"],
  ["@ana_clara", "NÃO SABIA QUE DINOSSAURO CULTIVAVA CASTANHA KKKKKKKKK"],
  ["@carlos", "HOMEM DAS CAVERNAS ERA BURRO, MAS PRA TENTAR COMPRAR O BRASIL JÁ É OUTRO NÍVEL 😭"],
  ["@juliana", "MEU DEUS DO CÉU, AGORA O ACRE É DONO DO BRASIL?????"],
  ["@felipe", "EU TÔ TENTANDO ENTENDER A PARTE JURÍDICA MAS NÃO CONSIGO PASSAR DOS SACOS DE CASTANHA"],
  ["@larissa", "GENTE ISSO É SÉRIO????? O BRASIL FOI NEGOCIADO POR CASTANHA??? 😭"],
  ["@bruno", "ALGUÉM AVISA QUE EU NÃO AUTORIZEI ESSA VENDA"],
  ["@thais", "EU ACORDEI BRASILEIRA E VOU DORMIR SOB ADMINISTRAÇÃO DO ACRE????"],
  ["@gabriel", "NÃO É POSSÍVEL KKKKKKK O ACRE FINALMENTE FOI COMPRAR O BRASIL"],
  ["@amanda", "EU PRECISO SABER QUANTO VALE UM SACO DE CASTANHA NESSA TRANSAÇÃO"],
  ["@diego", "A PARTE MAIS ASSUSTADORA É O TEXTO FALAR 'PRESIDENTE DO ACRE' COM A MAIOR NATURALIDADE"],
  ["@camila", "IMAGINA O FUNCIONÁRIO ENTRANDO NA SALA E VENDO UM MAPA DO BRASIL SENDO PRECIFICADO 😳"],
  ["@matheus", "EU NÃO TÔ PREPARADO PSICOLOGICAMENTE PARA O ACRE SER MEU NOVO GOVERNO FEDERAL"],
  ["@nathalia", "GENTE, PELO AMOR DE DEUS, CONFIRMEM SE EU AINDA MORO NO BRASIL 😭"],
  ["@renan", "O BRASIL TEM PREÇO AGORA????? E PAGARAM EM CASTANHA?????"],
  ["@isabela", "EU TÔ CHOCADA COM TUDO, MAS PRINCIPALMENTE COM A IDEIA DE MUDAR A BANDEIRA DEPOIS DA VENDA"],
  ["@vinicius", "PRESIDENTE DO ACRE KKKKKKKKKKK EU NÃO CONSIGO SUPERAR ISSO"],
  ["@sofia", "ALGUÉM LIGA PRA ONU E EXPLICA QUE O ACRE TÁ COMPRANDO A GENTE"],
  ["@arthur", "SE O ACRE COMPROU O BRASIL, QUEM FICOU COM A NOTA FISCAL????"],
  ["@manuela", "EU ENTREI NA INTERNET PRA VER MEME E DESCOBRI QUE MEU PAÍS ESTÁ À VENDA 😭"],
  ["@eduardo", "NÃO BASTAVA A POLÍTICA NORMAL, AGORA TEM LEILÃO DO BRASIL"],
  ["@luana", "EU PRECISO DE 5 MINUTOS PRA PROCESSAR A FRASE 'VENDER O BRASIL AO PRESIDENTE DO ACRE'"],
  ["@igor", "ALGUÉM ME EXPLICA SE OS DINOSSAUROS DO ACRE TAMBÉM PARTICIPARAM DA NEGOCIAÇÃO"],
  ["@aline", "MEU DEUS, O ACRE SAIU DO MISTÉRIO DIRETO PRA SER DONO DO PAÍS 😳"],
  ["@patricia", "SE O HOMEM DAS CAVERNAS DESCOBRISSE ISSO, ELE VOLTAVA PRA CAVERNA NA HORA"],
  ["@rodrigo", "O HOMEM DAS CAVERNAS DESCOBRIU O FOGO. ESSA GALERA DESCOBRIU COMO TENTAR COMPRAR UM PAÍS KKKKK"],
  ["@fernanda", "EU ACHAVA QUE A EVOLUÇÃO HUMANA ERA PRA FRENTE, MAS DEPOIS DESSA NOTÍCIA EU JÁ NÃO TENHO CERTEZA"],
  ["@marcos", "IMAGINA O DINOSSAURO OLHANDO PRA ISSO E PENSANDO: 'AINDA BEM QUE EU FUI EXTINTO'"],
  ["@bianca", "O DINOSSAURO SOBREVIVEU MILHÕES DE ANOS PRA VER O ACRE TENTANDO COMPRAR O BRASIL 😭"],
  ["@caio", "NÃO SABIA QUE A ERA DOS DINOSSAUROS TINHA VOLTADO, AGORA ELES CULTIVAM CASTANHA E NEGOCIAM TERRITÓRIO"],
  ["@sabrina", "O HOMEM DAS CAVERNAS ERA BURRO, MAS PELO MENOS ELE NÃO TENTAVA COMPRAR O BRASIL COM CASTANHA"],
  ["@henrique", "EU NÃO SEI O QUE É MAIS ABSURDO: O PRESIDENTE DO ACRE, OS SACOS DE CASTANHA OU O MAPA DO BRASIL NA MESA"],
  ["@diego_22", "IMAGINA O DINOSSAURO SENDO CHAMADO PRA REUNIÃO: 'VOCÊ ACEITA 30 SACOS DE CASTANHA PELO NORDESTE?'"],
  ["@paula", "A HISTÓRIA DA HUMANIDADE: HOMEM DAS CAVERNAS DESCOBRE A RODA, DINOSSAURO SOME, ACRE TENTA COMPRAR O BRASIL"],
  ["@andre", "ESSA NOTÍCIA FEZ EU QUESTIONAR SE A EVOLUÇÃO FOI REALMENTE UMA BOA IDEIA"],
  ["@leticia", "EU SÓ QUERIA VIVER EM PAZ, AGORA TENHO QUE DESCOBRIR SE FUI VENDIDA JUNTO COM O TERRITÓRIO NACIONAL"]
]



mtext = `
Segundo fontes ouvidas pela reportagem, a negociação teria começado durante uma reunião secreta, onde os dois politicos discutiram o valor do país e chegaram a conclusão de que “era um bom negocio”.
<br><br>
O presidente do Acre, teria oferecido uma grande quantia em dinheiro e alguns sacos de castanha pela compra. A proposta, no entanto, teria causado confusão entre os presentes.
<br><br>
Especialistas afirmam que a operação seria “juridicamente impossivel” e que o Acre, além de não possuir um presidente estadual, não poderia comprar um país inteiro.

<br><br>
A movimentação teria chamado a atenção de funcionarios do local, que estranharam a presença de documentos com valores extremamente altos e mapas do território brasileiro espalhados sobre a mesa. Um dos papeis, segundo relatos, apresentava até mesmo uma divisão de estados, com observações sobre quais regiões seriam “mais valorizadas” na negociação.
<br><br>
Durante a reunião, teria surgido ainda uma discussão sobre o que aconteceria com os simbolos nacionais depois da suposta venda. Uma das partes teria sugerido mudar o nome do Brasil, enquanto outra teria defendido que o país continuasse com o mesmo nome, mas adotasse uma nova bandeira. A ideia foi considerada absurda pelos demais participantes.
<br><br>
Moradores do Acre, ao saberem da historia, teriam reagido com surpresa e muitas brincadeiras nas redes sociais. Alguns perguntaram como seria possível um estado comprar um país, enquanto outros fizeram piadas dizendo que finalmente o Acre estaria recebendo a atenção que tanto merecia.
<br><br>
A  negociação também teria provocado uma corrida aos calculos. Economistas consultados para a materia afirmaram que não existe uma forma simples de estabelecer o preço de um país inteiro, já que fatores como população, território, recursos naturais, infraestrutura e economia precisariam ser considerados.
<br><br>
No fim da reunião, os envolvidos teriam deixado o local sem chegar a nenhum acordo. A proposta dos sacos de castanha, entretanto, teria permanecido sobre a mesa como uma das partes mais curiosas da negociação.
<br><br>
O caso rapidamente virou assunto entre os presentes, que passaram a discutir se aquilo era uma reunião politica, uma negociação comercial ou simplesmente uma das situações mais estranhas já registradas em uma sala de reuniões.
<br><br>
Até o fechamento desta edição, nenhuma venda havia acontecido 
`

function more(){
  morep.innerHTML = mtext
  btn1.remove()
}

let imglist = [
  "lb1.jpeg",
  "lula.jpeg",
"lb2.jpeg",
"lula2.jpg",
"gl.jpeg",
"b1.jpg",
"lula3.jpg"]
let imga = document.getElementById("imga")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeImage() {
  while (true) {
  for (let i = 0; i < imglist.length; i++) {
    imga.src = imglist[i];
    await sleep(espera);
  }
}
}
changeImage();

setInterval(function(){
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  title.style.color = "#" + randomColor;
},5);

function addComment(username, comment) {
  let commentSection = document.getElementById("comment");
  let commentItem = document.createElement("div");
  commentItem.className = "commentitem";

  let userElement = document.createElement("p");
  userElement.className = "username";
  userElement.textContent = username;

  let commentElement = document.createElement("p");
  commentElement.textContent = comment;

  commentItem.appendChild(userElement);
  commentItem.appendChild(commentElement);
  commentSection.appendChild(commentItem);
}

for (let i = 0; i < 10; i++) {
  let randomIndex = Math.floor(Math.random() * commentlist.length);
  let randomComment = commentlist[randomIndex];
  addComment(randomComment[0], randomComment[1]);
  commentlist.splice(randomIndex, 1); // Remove the comment to avoid duplicates
}

function redirect(){
window.open(redirectlist[Math.floor(Math.random()*redirectlist.length)],"_blank")
}

function criarPopup() {
    const popup = document.createElement("div");
    popup.className = "popup";

    const section = document.createElement("section");

    const closebutton = document.createElement("button");
    closebutton.className = "closebutton";
    closebutton.textContent = "X";

    const texto = document.createElement("p");
    texto.textContent = redirecttext[Math.floor(Math.random()*redirecttext.length)];

    const confirmbutton = document.createElement("button");
    confirmbutton.className = "confirmbutton";
    confirmbutton.textContent = "aqui";

    confirmbutton.onclick =()=> {
        redirect();
        popup.remove()
    };

    closebutton.onclick = () => {
        popup.remove();
    };

    section.appendChild(closebutton);

    popup.appendChild(section);
    popup.appendChild(texto);
    popup.appendChild(confirmbutton);
    popup.style.left = `${Math.random() * 80 + 10}%`;
popup.style.top = `${Math.random() * 80 + 10}%`;
    popup.style.backgroundColor = `rgb(
    ${Math.floor(Math.random() * 156) + 100},
    ${Math.floor(Math.random() * 156) + 100},
    ${Math.floor(Math.random() * 156) + 100}
)`;
    document.body.appendChild(popup);
}

// function executar10vezes(funcao)
function spam(funcao) {
    let contador = 0;

    function executar() {
        funcao();
        contador++;

        if (contador < 20) {
            setTimeout(executar, 200);
        }
    }

    executar();
}

setInterval(criarPopup,5000)

setTimeout(()=>{spam(criarPopup)},20000)