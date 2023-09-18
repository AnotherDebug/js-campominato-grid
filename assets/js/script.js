/* 
**Consegna:**

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

==============================================

1. Salvo il riferimento del mio container dove inserisco dinamicamente gli elementi 'div';

2. Creo un ciclo che ad ogni iterazione genera il mio elemento 'div', che di fatto sarà un quadrato;
   a. creo la funzione che aggiunge i quadrati, a cui vado ad applicare la classe square;
   b. Creo una variabile che contiene la funzione per inserire dinamicamente il div;
   c. Aggiungo square al mio container con .append();
   
3. Ogni quadrato avrà un evento al click, che aggiunge o toglie la classe active;
   a. Ad ogni iterazione del ciclo c'è un evento al click;
   b. Per richiamare il div all'evento al click, utilizzo la keyword this che è riferita a square che ha ricevuto l'evento, gli applico il metodo toggle che aggiunge o toglie la classe active dall'elemento div;

4. Stampo in console il numero corrispondente della cella cliccata;
   a. Per stampare il numero della cella corrispondente in console utilizzo l'indice, che lo passo come parametro della funzione atta a creare un nuovo elemento div;
*/


//1.
const containerRef = document.querySelector('.container');


//2.
for (let i = 0; i < 100; i++) {
    //2. b.
    const square = createSquare();
    //2. c.
    containerRef.append(square);
    //3. a.
    square.addEventListener ('click', function () {
        //3. b.
        this.classList.toggle('active');
        console.log(this);
    });

};
//2. a.
function createSquare () {
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    return newSquare;
};