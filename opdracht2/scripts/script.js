// JavaScript Document
console.log("howdy");
var mijnLijst = document.getElementById('mijnLijst');
var boekenLijst = document.getElementById('boekenLijst')

// boekButtons is een array
var boekButtons = boekenLijst.querySelectorAll('button') 

//voor animatie
var boek = boekenLijst.querySelectorAll('li')


// SORTEREN
// met list.js
/* de opties om het sorteren te initialiseren */
var options = {
    valueNames: [ 'title', 'author' ]
  };
  
  var bookList = new List('boekenLijstContainer', options);


  // de lijst na het openen initieel sorteren op name (oplopend a -> z)
  bookList.sort('title', { order: "asc" });


// DRAG&DROP
// met Sortable.js
new Sortable(mijnLijst, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(boekenLijst, {
    group: 'shared',
    animation: 150
});

boekButtons.forEach(boekButton => {
    boekButton.addEventListener ('click', addToMyList);
});

function addToMyList (event){
    var buttonGeklikt = event.target;
    var teVerplaatsenBoek = buttonGeklikt.closest('li');
    if (teVerplaatsenBoek.classList.contains("liefde")) { 
        teVerplaatsenBoek.classList.remove('liefde');
        boekenLijst.prepend(teVerplaatsenBoek);
        buttonGeklikt.classList.remove('min')
        buttonGeklikt.textContent = '+';
    } else {
        teVerplaatsenBoek.classList.add('liefde');
        mijnLijst.prepend(teVerplaatsenBoek);
        buttonGeklikt.classList.add('min')
        buttonGeklikt.textContent = '-';
    }
buttonGeklikt.focus();
    
}

boek.forEach(boeken => {
    boeken.addEventListener('drag', sleepAnimatie);
});

function sleepAnimatie () {
    boek.classList.add('wiggle');
}
