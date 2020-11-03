
$(document).ready( function(){

//JSnack 1
let biciclette = [
    {
        nome: 'scott',
        peso: 12
    },
    {
        nome: 'bianchi',
        peso: 10
    },
    {
        nome: 'giant',
        peso: 14
    }
];

console.log(biciclette);

let biciLeggera = biciclette[0];

biciclette.forEach( (element) => {
    if (element.peso < biciclette.peso){
        biciLeggera = element.peso;
    }
})

console.log(biciLeggera);



//Jsnack2 
let array = ['alessio', 'marco', 'paolo', 'luigi', 'fabio', 'giorgio'];

let tot = array.length - 1; 
let min = parseInt( prompt( 'inserisci un valore iniziale tra 0 e ' + tot ) );
let max = parseInt( prompt( 'inserisci un valore finale tra 0 e ' + tot ) );

let newArray = [];

newArray = array.filter((element, index) =>{

});





//Jsnack3

let oggetti = [
    {
        nome: 'mario',
        cognome: 'rossi',
        anni: 30
    },{
        nome: 'dario',
        cognome: 'de angelis',
        anni: 45
    }
];
 
console.log(oggetti);

let newOggetti = [...oggetti].map(person => {
    return {
        ...person,
        position: randomLetters()
    }
});

console.log(newOggetti);

function randomLetters(){
    let lettere = 'abcdefghijklmnopqrstuvwxyz';

    let lettera = lettere [randomNumbers (0, lettere.length - 1)];

    return lettera;
    
};

function randomNumbers(max,min){
    return Math.floor(Math.random() *(max - min + 1 )) + min;
};

});//----- end ready