// costruisco l'array contenete i percorsi delle immagini
const arrayPathImg = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];

// verifico  che l'array si legga in console
//console.log(arrayPathImg);

//dichiaro la costante containerDomElement per utilizzarla nel ciclo e fuori dal ciclo
const containerDomElement = document.querySelector('.container')
//creo un ciclo for per scorrere l'array e inserire contenuto nel container elemento di html
for(let i = 0; i < arrayPathImg.length; i++){
    console.log(arrayPathImg[i])
    //stampo nel dom il codice contenente '<div class="item"><img src="./img/.webp" alt=""></div>' sostituendo il percorso con il contenuto dell'array
    
    containerDomElement.innerHTML += `
    <div class="item active">
        <img src="${arrayPathImg[i]}" alt="">
    </div>`;
}


