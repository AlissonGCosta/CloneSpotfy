//variaveis
let musica = document.querySelector('audio');
let indexMusica = 0;
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameAuthor = document.querySelector('.description i');


//criando a lista de musicas]
let musics = [
    {titulo: 'jazz base', artista: 'Busy City', src:'musicas/Busy City - TrackTribe.mp3', img:'imagens/carro1.jpg'},
    {titulo: 'violão base', artista: 'Lobe City', src:'musicas/Lobe - Mini Vandals.mp3', img:'imagens/carro2.jpg'},
    {titulo: 'hip-hop base', artista: 'Travel Nonstap', src:'musicas/Travel Nonstop - Squadda B.mp3', img:'imagens/carro3.jpg'},
];

//barra de progresso da musica
musica.addEventListener('timeupdate',() => {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) *100) + '%';
    

    
    timeProgress();
    timeEnd();
    
})

function timeEnd(){
    let timeEnd = document.querySelector('.end');
    timeEnd.textContent = secondForMinutes(Math.floor(musica.duration))
}

function timeProgress(){
    let timeProgress = document.querySelector('.start');
    timeProgress.textContent = secondForMinutes(Math.floor( musica.currentTime));
}

function secondForMinutes(seconds){
    let spaceMinutes = Math.floor(seconds / 60);
    let spaceSeconds = seconds % 60;
    if (spaceSeconds < 10){
        spaceSeconds  = '0' + spaceSeconds;
    }

    return spaceMinutes+ ':' +spaceSeconds
}


//Funcionalidade do player
document.querySelector('.botao-play').addEventListener('click', () =>{
    musica.play();
    document.querySelector('.fa-pause-circle').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';   
})

document.querySelector('.fa-pause-circle').addEventListener('click', () => {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.fa-pause-circle').style.display = 'none';
})

document.querySelector('.fa-step-backward').addEventListener('click', () =>{
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2
    }
    renderMusic(indexMusica)
})

document.querySelector('.fa-step-forward').addEventListener('click', () =>{
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0
    }
    renderMusic(indexMusica)
})


function renderMusic(index){
    musica.setAttribute('src', musics[index].src);
    musica.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].titulo;
        nameAuthor.textContent = musics[index].artista;
        image.src = musics[index].img
        timeEnd();
    })
}

renderMusic(indexMusica);