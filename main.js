let listaFeiticeiros = [
  {
    nome:'Satoru Gojo',
    img:'assets/gojo.jpg',
    descricao:'Além de seu controle absoluto sobre o espaço, Gojo é conhecido por sua personalidade descontraída e senso de humor sarcástico.'
  },
  {
    nome: 'Suguru Geto',
    img: 'assets/geto.jpg',
    descricao: 'Ele possui profundos conhecimentos sobre maldições e é implacável em seus objetivos, buscando realizar sua visão distorcida do mundo.'
  },
  {
    nome: 'Yuji Itadori',
    img: 'assets/itadori.jpg',
    descricao: 'Apesar de se tornar hospedeiro de Sukuna, Itadori mantém sua gentileza e determinação em proteger os outros, tornando-se um protagonista cativante.'
  },
  {
    nome: 'Megumi Fushiguro',
    img: 'assets/megumi.png',
    descricao: ' Fushiguro mostra uma determinação inabalável em proteger os outros, muitas vezes enfrentando desafios que testam seus limites.'
  },
  {
    nome: 'Ryomen Sukuna',
    img: 'assets/sukuna.jpg',
    descricao: 'Além de sua força incomparável, Sukuna é conhecido por sua astúcia e habilidade em manipular situações a seu favor.'
  },
  {
    nome: 'Yuta Okkotso',
    img: 'assets/yuta.jpg',
    descricao: 'Yuta luta não apenas contra maldições, mas também contra suas próprias batalhas internas, buscando encontrar um equilíbrio entre suas habilidades e seu passado conturbado.'
  },
  {
    nome: 'Nobara Kugisaki',
    img: 'assets/nobara.png',
    descricao: 'Uma jovem exorcista que utiliza um martelo amaldiçoado e uma técnica de controle de objetos chamada "Resonância".'
  },
  {
    nome: 'Aoi Todo',
    img: 'assets/todo.jpg',
    descricao: 'Todo é um personagem com uma personalidade extravagante e confiante. Ele exala uma aura de arrogância e competição, sempre buscando se destacar em suas habilidades de combate, especialmente no uso de técnicas de controle de chamas. Sua presença muitas vezes adiciona uma dinâmica interessante às interações com outros personagens.'
  },
  {
    nome: 'Toji Fushiguro',
    img: 'assets/toji.jpg',
    descricao: 'Toji Fushiguro é um homem misterioso e habilidoso em combate. Ele é conhecido por sua abordagem pragmática e fria diante de desafios, demonstrando uma eficiência brutal em suas ações. Apesar de sua personalidade reservada, Toji tem uma conexão familiar com Megumi Fushiguro, e suas interações revelam uma dinâmica complexa entre os dois. Sua presença na história adiciona uma camada de intriga e tensão, à medida que seus motivos e passado são gradualmente revelados.'
  }
]

listaFeiticeiros.map((feiticeiro, posicao) => {
  let cardJujutsu = document.querySelector(".row")
  cardJujutsu.innerHTML += `
    <div class="col-md-4">
    <div class="card m-2">
      <img src="${feiticeiro.img}" class="card-img-top" alt="..." >
      <div class="card-body">
        <h5 class="card-title">${feiticeiro.nome}</h5>
        <button onclick="abrirModal(${posicao})" class="btn btn-secondary">
        <i class="bi bi-zoom-in"></i>
        </button>
      </div>
    </div>
    </div>
  `

  console.log(posicao);
})

window.abrirModal = function(x) {
  let feiticeiroSelecionado = listaFeiticeiros[x]

  document.getElementById("jujutsu").innerHTML = feiticeiroSelecionado.nome;
  document.getElementById("descJujutsu").innerHTML = feiticeiroSelecionado.descricao;
  document.getElementById("imgModal").src = feiticeiroSelecionado.img;

  new bootstrap.Modal('#zoomImg').show();
}

window.darkWhiteMode = function() {
  let theme = document.querySelector("html").getAttribute("data-bs-theme")

  if(theme === 'dark'){
    document.querySelector("html").setAttribute("data-bs-theme", "light")
    document.querySelector('#darkWhite').innerHTML = `<i class="bi bi-moon-fill"></i>`
  } else {
    document.querySelector("html").setAttribute("data-bs-theme", "dark")
    document.querySelector('#darkWhite').innerHTML = `<i class="bi bi-sun-fill"></i>`
  }
}