//stampo i numeri da 1 a 100 (i+1)
//creo le variabili resto per poterle utilizzare nelle richieste (fizz buzz)
//utilizzo le variabili resto in un if per rispettare richieste

for (i = 0; i < 100; i++) {
    let num = i + 1; //number
    let resto3 = num % 3; //number
    let resto5 = num % 5; //number

    //conta l'ordine
    if (resto3 === 0 && resto5 === 0) {
        console.log("FizzBuzz");
    } else if (resto3 === 0) {
        console.log("Fizz");
    } else if (resto5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}