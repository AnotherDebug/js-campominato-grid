/* 
**Consegna:**

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

==============================================

1. Salvo il riferimento del mio container dove inserisco dinamicamente gli elementi 'div';

2. Creo un ciclo che ad ogni iterazione genera il mio elemento 'div', che di fatto sarà un quadrato;
   a. Creo una variabile che contiene una funzione per inserire dinamicamente il div, a cui vado ad aggiungere la classe square;

3. Ogni quadrato avrà un evento al click, che aggiunge o toglie la classe active;
*/


//1.
const containerRef = document.querySelector('.container');


//2.
for (let i = 0; i < 100; i++) {
    containerRef.innerHTML += `<div class="square"></div>`;
};