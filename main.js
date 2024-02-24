let listaFeiticeiros = [
  // {
  //   nome:'Satoru Gojo',
  //   img:'assets/gojo.jpg',
  //   descricao:'Além de seu controle absoluto sobre o espaço, Gojo é conhecido por sua personalidade descontraída e senso de humor sarcástico.'
  // },
  // {
  //   nome: 'Suguru Geto',
  //   img: 'assets/geto.jpg',
  //   descricao: 'Ele possui profundos conhecimentos sobre maldições e é implacável em seus objetivos, buscando realizar sua visão distorcida do mundo.'
  // },
  // {
  //   nome: 'Yuji Itadori',
  //   img: 'assets/itadori.jpg',
  //   descricao: 'Apesar de se tornar hospedeiro de Sukuna, Itadori mantém sua gentileza e determinação em proteger os outros, tornando-se um protagonista cativante.'
  // },
  // {
  //   nome: 'Megumi Fushiguro',
  //   img: 'assets/megumi.png',
  //   descricao: ' Fushiguro mostra uma determinação inabalável em proteger os outros, muitas vezes enfrentando desafios que testam seus limites.'
  // },
  // {
  //   nome: 'Ryomen Sukuna',
  //   img: 'assets/sukuna.jpg',
  //   descricao: 'Além de sua força incomparável, Sukuna é conhecido por sua astúcia e habilidade em manipular situações a seu favor.'
  // },
  // {
  //   nome: 'Yuta Okkotso',
  //   img: 'assets/yuta.jpg',
  //   descricao: 'Yuta luta não apenas contra maldições, mas também contra suas próprias batalhas internas, buscando encontrar um equilíbrio entre suas habilidades e seu passado conturbado.'
  // },
  // {
  //   nome: 'Nobara Kugisaki',
  //   img: 'assets/nobara.png',
  //   descricao: 'Uma jovem exorcista que utiliza um martelo amaldiçoado e uma técnica de controle de objetos chamada "Resonância".'
  // },
  // {
  //   nome: 'Aoi Todo',
  //   img: 'assets/todo.jpg',
  //   descricao: 'Todo é um personagem com uma personalidade extravagante e confiante. Ele exala uma aura de arrogância e competição, sempre buscando se destacar em suas habilidades de combate, especialmente no uso de técnicas de controle de chamas. Sua presença muitas vezes adiciona uma dinâmica interessante às interações com outros personagens.'
  // },
  // {
  //   nome: 'Toji Fushiguro',
  //   img: 'assets/toji.jpg',
  //   descricao: 'Toji Fushiguro é um homem misterioso e habilidoso em combate. Ele é conhecido por sua abordagem pragmática e fria diante de desafios, demonstrando uma eficiência brutal em suas ações. Apesar de sua personalidade reservada, Toji tem uma conexão familiar com Megumi Fushiguro, e suas interações revelam uma dinâmica complexa entre os dois. Sua presença na história adiciona uma camada de intriga e tensão, à medida que seus motivos e passado são gradualmente revelados.'
  // }
  {
    "nome": "Yuji Itadori",
    "img": "https://criticalhits.com.br/wp-content/uploads/2021/12/yuji.jpg",
    "descricao": "Um estudante do ensino médio com uma força física excepcional."
  },
  {
    "nome": "Satoru Gojo",
    "img": "https://www.otempo.com.br/image/contentid/policy:1.2870698:1684328641/image-Jujutsu-Kaisen-decepciona-com-retorno-de-Gojo-depois-de-3-anos.jpg?f=3x2&w=1224",
    "descricao": "Um dos mais fortes feiticeiros, conhecido por sua personalidade brincalhona."
  },
  {
    "nome": "Megumi Fushiguro",
    "img": "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/01/legiao_ui0WaALqM34s.jpg.webp",
    "descricao": "Um estudante de Jujutsu habilidoso, com uma habilidade única de invocar criaturas místicas."
  },
  {
    "nome": "Nobara Kugisaki",
    "img": "https://beebom.com/wp-content/uploads/2023/10/nobara-prior-to-her-death.jpg?w=1250&quality=75",
    "descricao": "Uma exibicionista confiante que utiliza uma técnica de combate com bonecas amaldiçoadas."
  },
  {
    "nome": "Toge Inumaki",
    "img": "https://animerant.com.br/wp-content/uploads/2024/01/toge-braco.webp",
    "descricao": "Um estudante de Jujutsu que usa palavras como feitiços em combate."
  },
  {
    "nome": "Panda",
    "img": "https://i.pinimg.com/736x/15/e3/0a/15e30ae6053d8ab1823c82aa53c2662c.jpg",
    "descricao": "Um companheiro de classe de Yuji e Megumi, que é, na verdade, uma criatura amaldiçoada."
  },
  {
    "nome": "Maki Zenin",
    "img": "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2022/09/legiao_aTyIuzNU3ZRt.jpg.webp",
    "descricao": "Uma ex-membro da poderosa família Zenin, que luta para provar seu valor."
  },
  {
    "nome": "Momo Nishimiya",
    "img": "https://image.tensorartassets.com/model_showcase/645968480362936778/252404c0-4a75-a16b-7f79-d30aca612a47.jpeg",
    "descricao": "Uma feiticeira com habilidades de manipulação de objetos."
  },
  {
    "nome": "Yuta Okkotsu",
    "img": "assets/yuta.jpg",
    "descricao": "O protagonista do filme Jujutsu Kaisen 0, que luta contra maldições."
  },
  {
    "nome": "Kento Nanami",
    "img": "https://eoszsmvknnh.exactdn.com/wp-content/uploads/2023/12/1702217605_Os-fas-de-JJK-podem-comprar-os-oculos-iconicos-de.jpg?strip=all&lossy=1&ssl=1",
    "descricao": "Um feiticeiro frio e calculista que segue rigidamente as regras."
  },
  {
    "nome": "Aoi Todo",
    "img": "https://criticalhits.com.br/wp-content/uploads/2023/12/latest-1.jpg",
    "descricao": "Um feiticeiro excêntrico e poderoso que forma uma aliança improvável com Yuji."
  },
  {
    "nome": "Kasumi Miwa",
    "img": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/miwa-who.jpg",
    "descricao": "Uma estudante de Jujutsu dedicada e habilidosa."
  },
  {
    "nome": "Masamichi Yaga",
    "img": "https://i.pinimg.com/736x/3d/02/b6/3d02b6815d9ff2e98490b5e45fbfd842.jpg",
    "descricao": "O diretor da Escola de Jujutsu Tokyo."
  },
  {
    "nome": "Kiyotaka Ijichi",
    "img": "https://fictionhorizon.com/wp-content/uploads/2023/10/Ijichi.jpg",
    "descricao": "Um professor na Escola de Jujutsu Tokyo que orienta os estudantes."
  },
  {
    "nome": "Junpei Yoshino",
    "img": "https://animerantshome.files.wordpress.com/2023/07/jujutsu-kaisen-junpei-yoshino-03-2.png?w=1200",
    "descricao": "Um estudante colegial que se envolve com maldições após um encontro com Yuji."
  },
  {
      "nome": 'Toji Fushiguro',
      "img": 'https://c4.wallpaperflare.com/wallpaper/95/627/603/jujutsu-kaisen-fushiguro-toji-weapon-sword-muscles-hd-wallpaper-preview.jpg',
      "descricao": 'Toji Fushiguro é um homem misterioso e habilidoso em combate. Ele é conhecido por sua abordagem pragmática e fria diante de desafios, demonstrando uma eficiência brutal em suas ações. Apesar de sua personalidade reservada, Toji tem uma conexão familiar com Megumi Fushiguro, e suas interações revelam uma dinâmica complexa entre os dois. Sua presença na história adiciona uma camada de intriga e tensão, à medida que seus motivos e passado são gradualmente revelados.'
  },
  {
      "nome": 'Ryomen Sukuna',
      "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydJ2cVWIR3eg4g7TmVmW-k-0EIL3B682L6g&usqp=CAU',
      "descricao": 'Além de sua força incomparável, Sukuna é conhecido por sua astúcia e habilidade em manipular situações a seu favor.'
  },
  {
    "nome": 'Mahito',
    "img": 'https://animerant.com.br/wp-content/uploads/2023/08/1e24e-16914249060895-1920.jpg',
    "descricao": 'Mahito é um personagem conhecido por sua aparência distorcida e sua personalidade sádica. Ele é habilidoso em manipular a forma e a essência das pessoas, explorando conceitos obscuros da natureza humana. Sua presença geralmente representa uma ameaça para os outros personagens, à medida que ele busca entender e experimentar a maldade em sua forma mais pura.'
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