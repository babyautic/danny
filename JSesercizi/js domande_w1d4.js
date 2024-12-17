/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Principali tipi di dati sono:
- Number: il tipo di dato Number rappresenta i valori numerici ed viene assegnato senza gli apici es: = 10 -> CORRETTO, = "10" -> ERRATO. 
- String: il tipo di dato String rappresenta i caratteri (ABC) ed viene assegnato con gli apici es: = "ciao" -> CORRETTO, = ciao -> ERRATO.
- Boolean: il tipo di dato boleano si basa sul valore: TRUE o FALSE. 
- Undefind e NUll
- Oggetti
- Arrey: sono una lista di dati 
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
In JS gli oggetti sono una raccolta di coppie chiave-valore
let atudent ={
name: "Mario",
age: 23,
hasWebcam: false, 

name:, age:, hasWebcam:, rappresentano la chiave dei valori.. quindi "Mario"; 23; false. sono i valori della chiave.
}
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
let numero1 = 12 
let numero2 = 20 

console.log (numero1 + numero2)
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* let x = 12 */


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* let name = "danny" */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
let x = 12
let y = 4 
console.log (x - y)
 */


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
 */
