//Parte 1
let xvalue = 10;
for (let n = xvalue; n >= 0; n -= 0.5) {
    console.log(n);
}

//Parte 2

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += (i % 2 !== 0) ? i : 0;
}