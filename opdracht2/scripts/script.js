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
    animation: 150,
    onAdd: function (evt) {
        var deButton = evt.item.querySelector("button");
        deButton.classList.add('min')
        deButton.textContent = '-';
        // dragAnimatie();
	}
});

// Boek toevoegen aan de plank
new Sortable(boekenLijst, {
    group: 'shared',
    animation: 150,
    onAdd: function (evt) {
        var deButton = evt.item.querySelector("button");
        deButton.classList.remove('min');
        deButton.textContent = '+';
        // dragAnimatie();
	}
});

// Boek met de knop toevoegen
boekButtons.forEach(boekButton => {
    boekButton.addEventListener ('click', addToMyList);
    // dragAnimatie();
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

// Drag icoon verwijderen na afloop
function dragAnimatie (){
    var dragIcoon = document.querySelector('#drag');
    setTimeout( function (){
        dragIcoon.remove();
    },15000);
}
dragAnimatie();

// Animatie van drag icoon alleen bij empty state weergeven
// function dragAnimatie (){
//     var dragIcoon = document.querySelector('#drag');
//     if (!mijnLijst.value) {
//         dragIcoon.classList.add('drag');
//     } else {
//         dragIcoon.classList.remove('drag');
//     }
// }
// dragAnimatie();